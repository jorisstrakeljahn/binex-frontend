// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@opengsn/contracts/src/StakeManager.sol";

contract MyStakeManager is StakeManager {
    constructor(
        uint256 _maxUnstakeDelay,
        uint256 _abandonmentDelay,
        uint256 _escheatmentDelay,
        address _burnAddress,
        address _devAddress
    )
    StakeManager(
    _maxUnstakeDelay,
    _abandonmentDelay,
    _escheatmentDelay,
    _burnAddress,
    _devAddress
    )
    {}
}

