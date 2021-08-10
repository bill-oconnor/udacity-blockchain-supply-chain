
var ConsumerRole = artifacts.require('ConsumerRole');
var DistributorRole = artifacts.require('DistributorRole');
var FarmerRole = artifacts.require('FarmerRole');
var RetailerRole = artifacts.require('RetailerRole');

contract("ConsumerRole", async(accounts) => {
  it("Owner can add address", async () => {
    const owner = accounts[0];

    const consumerRole = await ConsumerRole.deployed();
    const consumerID = accounts[4];

    await consumerRole.addConsumer(consumerID, { from: owner});

    const added = await consumerRole.isConsumer.call(consumerID);

    assert.equal(added, true, "Consumer was not successfully added");
  });
  

  
});

contract("DistributorRole", async(accounts) => {
  it("Owner can add address", async () => {
    const owner = accounts[0];

    const distributorRole = await DistributorRole.deployed();

    const distributorID = accounts[2];

    await distributorRole.addDistributor(distributorID, { from: owner});

    const added = await distributorRole.isDistributor.call(distributorID);

    assert.equal(added, true, "Distributor was not successfully added");
  })
  
});

contract("FarmerRole", async(accounts) => {
  it("Owner can add address", async () => {
    const owner = accounts[0];

    const farmerRole = await FarmerRole.deployed();
    const farmerID = accounts[1];

    await farmerRole.addFarmer(farmerID, { from: owner});

    const added = await farmerRole.isFarmer.call(farmerID);

    assert.equal(added, true, "Farmer was not successfully added");

  })
  
  
});

contract("RetailerRole", async(accounts) => {
  it("Owner can add address", async () => {
    const owner = accounts[0];

    const retailerRole = await RetailerRole.deployed();

    const retailerID = accounts[3];

    await retailerRole.addRetailer(retailerID, { from: owner});

    const added = await retailerRole.isRetailer.call(retailerID);

    assert.equal(added, true, "Retailer was not found");
  })
  
});