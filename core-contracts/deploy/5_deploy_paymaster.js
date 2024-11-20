//5_deploy_paymaster.js
const Paymaster = artifacts.require("MyPaymaster");
const RelayHub = artifacts.require("RelayHub");
const TrustedForwarder = artifacts.require("TrustedForwarder");

module.exports = async function (deployer) {
  await deployer.deploy(Paymaster);
  console.log("Paymaster deployed at:", Paymaster.address);

  const paymaster = await Paymaster.deployed();

  const trustedForwarder = await TrustedForwarder.deployed();
  const relayHub = await RelayHub.deployed();

  await paymaster.setTrustedForwarder(trustedForwarder.address);
  console.log("TrustedForwarder set in Paymaster:", trustedForwarder.address);

  await paymaster.setRelayHub(relayHub.address);
  console.log("RelayHub set in Paymaster:", relayHub.address);
};


