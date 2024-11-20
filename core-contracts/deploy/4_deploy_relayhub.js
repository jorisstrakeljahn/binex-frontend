//4_deploy_relayhub.js
const RelayHub = artifacts.require("RelayHub");
const StakeManager = artifacts.require("MyStakeManager");
const Penalizer = artifacts.require("MyPenalizer");

module.exports = async function (deployer) {
  const stakeManager = await StakeManager.deployed();
  const penalizer = await Penalizer.deployed();
  const batchGateway = "0x0000000000000000000000000000000000000000"; // Falls nicht verwendet
  const relayRegistrar = "0x0000000000000000000000000000000000000000"; // Falls nicht verwendet

  const config = {
    devFee: 0, // Beispielwert
    gasReserve: 100000, // Beispielwert
    postOverhead: 40000, // Beispielwert
    gasOverhead: 50000, // Beispielwert
    maxWorkerCount: 10, // Beispielwert
    minimumUnstakeDelay: 1000, // Beispielwert
    devAddress: "0xb5A99C004578140Bb44BDAcEFc90E94c182C59b7",
    baseRelayFee: 0, // Beispielwert
    pctRelayFee: 0, // Beispielwert
  };

  await deployer.deploy(
    RelayHub,
    stakeManager.address,
    penalizer.address,
    batchGateway,
    relayRegistrar,
    config
  );
  console.log("RelayHub deployed at:", RelayHub.address);
};



