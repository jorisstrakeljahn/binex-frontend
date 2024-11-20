//3_deploy_penalizer.js
const Penalizer = artifacts.require("MyPenalizer");

module.exports = async function (deployer) {
  const penalizeBlockDelay = 10; // Beispielwert
  const penalizeBlockExpiration = 600; // Beispielwert

  await deployer.deploy(
    Penalizer,
    penalizeBlockDelay,
    penalizeBlockExpiration
  );
  console.log("Penalizer deployed at:", Penalizer.address);
};



