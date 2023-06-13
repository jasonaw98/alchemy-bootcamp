const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

  describe("Deployment", function () {
    async function fixture() {
      const [owner, otherAccount] = await ethers.getSigners();
      const Lock = await ethers.getContractFactory("Contract");
      const lock = await Lock.deploy();
      const address = await lock.getAddress();
      console.log("address=", address);
      return { address, lock };
    }

    it("Should deploy attempt", async function () {
      const {lock, address} =  await loadFixture (fixture);

      // console.log("attempt", address);
      const att = await ethers.getContractFactory("Attempt");
      const ATT = await att.deploy(address);
      const add = await ATT.getAddress();
      console.log("attempt address=", add);

      await ATT.callAttempt();

    });

  });
