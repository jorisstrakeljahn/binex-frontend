const BinexNFT = artifacts.require('BinexNFT');

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(BinexNFT, 'Binex NFT', 'BNFT');
  const binexNFT = await BinexNFT.deployed();

  // Setze deinen Backend-Account als Maintainer
  const deployerAddress = accounts[0];
  await binexNFT.setMaintainer(deployerAddress, true);
  console.log('BinexNFT deployed to:', binexNFT.address);
  console.log('Maintainer set:', deployerAddress);
};

