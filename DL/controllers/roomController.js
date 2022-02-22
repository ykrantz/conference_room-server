require("../db").connect();

const { room } = require("../models/indexModels");

const create = async ({ name, maxOfPeople, hourCost }) => {
  return await room.create({ name, maxOfPeople, hourCost });
};
const readOne = async (filter) => {
  return await room.findOne(filter);
};
const readByID = async (id) => {
  return await room.findById(id);
};

const readAll = async (filter) => {
  return await room.find(filter);
};

const update = async (filter, newValue) => {
  return room.findOneAndUpdate(filter, newValue, { new: true });
};

const deleteOne = async (filter) => {
  return room.findOneAndDelete(filter);
};

module.exports = {
  create,
  readOne,
  readByID,
  readAll,
  update,
  deleteOne,
};

//
// tests:

// const temp1 = { name: "aaa" };
// const temp2 = { name: "ccc" };
// async function test1() {
//   return await create("aaa", 3, 4);
// }

// // test1();

// async function test2() {
//   //   await require("../db").connect();
//   //   const ans = await Room.findOne({ name: "aaa" });
//   //   console.log({ ans });
//   //   const ans2 = await findOneRoom({ name: "aaa" });
//   //   const ans3 = await findAllRoom({ name: "aaa" });
//   //   console.log({ ans3 });

//   //   const ans4 = await updateRoom(temp1, temp2);
//   const ans5 = await deleteOne(temp2);
//   console.log({ ans5 });
//   //   const ans3 = await findOneRoom("name", "aaa");
//   //   console.log({ ans2 });
//   //   return await findOneRoom("name", "aaa");
// }

// console.log("$$$");
// // console.log(test1());
// // test2();
// // console.log(test2());
