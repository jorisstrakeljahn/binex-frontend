//1_deploy_trusted_forwarder.js
const TrustedForwarder = artifacts.require("TrustedForwarder");

module.exports = async function (deployer) {
  await deployer.deploy(TrustedForwarder);
  console.log("TrustedForwarder deployed at:", TrustedForwarder.address);
};


