// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract CashOutContract is Pausable, Ownable {
    event TokenFundsDeposited(
        address indexed tokenDeposited,
        address indexed addressDeposited,
        uint256 amountDeposited
    );
    event TokenFundsWithdrawn(
        address indexed tokenWithdrawn,
        address indexed withdrawAddress,
        uint256 amountWithdrawn
    );
    event FundsWithdrawn(
        address indexed withdrawAddressNative,
        uint256 amountWithdrawnNative
    );
    event UniqueTokenAdded(address indexed addedToken);
    event contractTokenBalanceAdjusted(address indexed token, uint256 amount);
    address[] public allowedTokensAddresses;
    mapping(address => uint256) public contractTokenBalances;
    mapping(address => bool) public tokenIsAllowed;

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    receive() external payable {}

    fallback() external payable {}

    function addAllowedToken(address _token) public whenNotPaused onlyOwner {
        require(!tokenIsAllowed[_token], "token Already Exists");
        allowedTokensAddresses.push(_token);
        tokenIsAllowed[_token] = true;
        emit UniqueTokenAdded(_token);
    }

    function depositToken(address _token, uint256 _amount) public {
        require(tokenIsAllowed[_token], "the token is not currently allowed");
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        uint256 contractTokenBalance = contractTokenBalances[_token] += _amount;
        emit contractTokenBalanceAdjusted(_token, contractTokenBalance);
        emit TokenFundsDeposited(_token, msg.sender, _amount);
    }

    function withdrawToken(address _withdrawerAddress, address _token)
        public
        onlyOwner
        whenNotPaused
    {
        require(tokenIsAllowed[_token], "the token is currently not allowed");
        require(
            IERC20(_token).balanceOf(address(this)) >= 0,
            "insufficient tokens available in the contract"
        );
        uint256 _amount = IERC20(_token).balanceOf(address(this));
        IERC20(_token).transfer(_withdrawerAddress, _amount);
        uint256 contractTokenBalance = contractTokenBalances[_token] = 0;
        emit contractTokenBalanceAdjusted(_token, contractTokenBalance);
        emit TokenFundsWithdrawn(_token, _withdrawerAddress, _amount);
    }

    function withdrawCoin(address _withdrawerAddress)
        public
        payable
        onlyOwner
        whenNotPaused
    {
        uint256 _amount = address(this).balance;
        (bool success, ) = payable(_withdrawerAddress).call{value: _amount}("");
        require(success, "Failed to withdraw coin to address");
        emit FundsWithdrawn(_withdrawerAddress, _amount);
    }
}
