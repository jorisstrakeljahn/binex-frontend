//2_deploy_stake_manager.js
const StakeManager = artifacts.require("MyStakeManager");

module.exports = async function (deployer) {
  const maxUnstakeDelay = 10000; // Beispielwert
  const abandonmentDelay = 1000; // Beispielwert
  const escheatmentDelay = 1000; // Beispielwert
  const burnAddress = "0x000000000000000000000000000000000000dEaD"; // Beispielwert
  const devAddress = "0xb5A99C004578140Bb44BDAcEFc90E94c182C59b7";

  await deployer.deploy(
    StakeManager,
    maxUnstakeDelay,
    abandonmentDelay,
    escheatmentDelay,
    burnAddress,
    devAddress
  );
  console.log("StakeManager deployed at:", StakeManager.address);
};



