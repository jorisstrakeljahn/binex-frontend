// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./token/ABaseNFT.sol";

contract BinexNFT is ABaseNFT {
    mapping(address => bool) public maintainers;

    constructor(string memory name, string memory symbol) ABaseNFT(name, symbol) {}

    function mintTo(
        address receiver,
        uint256 tokenId,
        string calldata tokenURI
    ) external override _onlyMaintainer {
        _mint(receiver, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    function setMaintainer(address maintainer, bool shouldBeMaintainer) external onlyOwner {
        maintainers[maintainer]= shouldBeMaintainer;
    }

    modifier _onlyMaintainer() {
        require(maintainers[msg.sender] == true, "Only maintainers have permission to call this function.");
        _;
    }

    function getUserTokens(address user) external view returns (uint256[] memory) {
        uint256 balance = balanceOf(user);

        uint256[] memory tokens = new uint256[](balance);

        for (uint256 i = 0; i < balance; i++) {
            tokens[i] = tokenOfOwnerByIndex(user, i);
        }

        return tokens;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ABaseNFT) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);

        if (from != address(0) && to != address(0)) {
            revert("BinexNFT: Transfers are not allowed");
        }
    }

    function exists(uint256 tokenId) public view returns (bool) {
        return _exists(tokenId);
    }

}
