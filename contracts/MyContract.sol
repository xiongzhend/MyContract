pragma solidity ^0.4.19;

contract MyContract {
    uint constant MAX_BET = 0.01 ether;
    uint constant MAX_AMOUNT = 300000 ether;

    // Standard contract ownership transfer.
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    function getCommit(uint reveal) public pure returns (uint) {
        return uint(keccak256(abi.encodePacked(reveal)));
    }

    function getTest(uint modulo) external payable {
        // Validate input data ranges.
        uint amount = msg.value;
        require (modulo > 1 && modulo <= MAX_MODULO, "Modulo should be within range.");

        // TODO:
    }
}
