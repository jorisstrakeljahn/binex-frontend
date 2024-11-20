// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract VPPNFT is ERC721URIStorage, ERC2771Context, ReentrancyGuard {
    mapping(address => mapping(uint256 => bool)) public hasClaimed;

    constructor(
        string memory name,
        string memory symbol,
        address trustedForwarder
    ) ERC721(name, symbol) ERC2771Context(trustedForwarder) {}

    function mint(uint256 surveyId) external nonReentrant {
        address sender = _msgSender();

        require(!hasClaimed[sender][surveyId], unicode"NFT bereits für diese Umfrage erhalten");

        hasClaimed[sender][surveyId] = true;

        uint256 tokenId = _generateTokenId(surveyId, sender);
        _mint(sender, tokenId);
        _setTokenURI(tokenId, _generateTokenURI(surveyId));
    }

    function _generateTokenId(uint256 surveyId, address user) internal pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(surveyId, user)));
    }

    function _generateTokenURI(uint256 surveyId) internal pure returns (string memory) {
        return string(abi.encodePacked("https://example.com/nft/", Strings.toString(surveyId)));
    }

    // Überschreiben der _msgSender() und _msgData() Funktionen
    function _msgSender()
    internal
    view
    override(Context, ERC2771Context)
    returns (address sender)
    {
        return ERC2771Context._msgSender();
    }

    function _msgData()
    internal
    view
    override(Context, ERC2771Context)
    returns (bytes calldata)
    {
        return ERC2771Context._msgData();
    }

    // Überschreiben von tokenURI und _burn
    function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721URIStorage)
    returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721URIStorage) {
        super._burn(tokenId);
    }
}


