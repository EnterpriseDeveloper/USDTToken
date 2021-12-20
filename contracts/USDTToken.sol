pragma solidity ^0.6.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title ERC20 example for token contracts to be deployed to Ethereum.
 */
contract USDTToken is ERC20 {
    address public owner;

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _initialSupplyCoins
    ) public payable ERC20(_name, _symbol) {
        owner = msg.sender;
        _setupDecimals(_decimals);
        _mint(msg.sender, _initialSupplyCoins * (10**uint256(_decimals)));
    }
}