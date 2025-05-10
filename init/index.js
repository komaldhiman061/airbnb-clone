const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WanderHearth");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: '681b452dc1c8139b5229ce0f' }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
