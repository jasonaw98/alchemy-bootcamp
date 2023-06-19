
const hre = require("hardhat");

async function main() {

  const lock = await hre.ethers.deployContract("Faucet");

  await lock.waitForDeployment();

    // await lock.callAttempt();
    console.log("address", await lock.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
