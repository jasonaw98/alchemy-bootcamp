
const hre = require("hardhat");

async function main() {

  const lock = await hre.ethers.deployContract("Attempt", ["0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"]);

  await lock.waitForDeployment();

    await lock.callAttempt();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
