// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@opengsn/contracts/src/BasePaymaster.sol";
import "@opengsn/contracts/src/utils/GsnTypes.sol";

contract MyPaymaster is BasePaymaster {
    function versionPaymaster() external view override returns (string memory) {
        return "3.0.0";
    }

    // Überschreiben Sie die internen Funktionen _preRelayedCall und _postRelayedCall

    function _preRelayedCall(
        GsnTypes.RelayRequest calldata relayRequest,
        bytes calldata signature,
        bytes calldata approvalData,
        uint256 maxPossibleGas
    )
    internal
    override
    virtual
    returns (bytes memory context, bool rejectOnRecipientRevert)
    {
        // Ihre Logik hier
        // Zum Beispiel: Akzeptieren Sie alle Anfragen
        return ("", false);
    }

    function _postRelayedCall(
        bytes calldata context,
        bool success,
        uint256 gasUseWithoutPost,
        GsnTypes.RelayData calldata relayData
    )
    internal
    override
    virtual
    {
        // Ihre Logik hier
        // Zum Beispiel: Keine spezielle Aktion erforderlich
    }
}




