require("../db").connect();

const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  maxOfPeople: {
    type: Number,
    required: true,
  },
  hourCost: {
    type: Number,
    required: true,
  },
});

// const roomModel = mongoose.model("room", roomSchema);
// module.exports = roomModel;
module.exports = mongoose.model("Room", roomSchema);

// const test = {
//   name: "regards to Yonatan the king",
//   maxOfPeople: 4,
//   value: 5,
// };

// await roomModel.create(test);

// const ans=await roomModel.create(test);
