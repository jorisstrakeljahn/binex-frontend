//6_deploy_vppnft.js
const VPPNFT = artifacts.require("VPPNFT");
const TrustedForwarder = artifacts.require("TrustedForwarder");

module.exports = async function (deployer) {
  const trustedForwarder = await TrustedForwarder.deployed();
  const trustedForwarderAddress = trustedForwarder.address;

  await deployer.deploy(VPPNFT, "VPP NFT", "VPP", trustedForwarderAddress);
  console.log("VPPNFT deployed at:", VPPNFT.address);
};


