pragma solidity  ^0.6.2;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract token is ERC20 {
    constructor(uint256 initialSupply) ERC20("Mycup", "Mcup") public {
        _mint(msg.sender, initialSupply);
    }
}

