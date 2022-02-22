require("../db").connect();

const { room } = require("../models/indexModels");

const create = async ({ name, maxOfPeople, hourlyCost }) => {
  return await room.create({ name, maxOfPeople, hourlyCost });
};
const readOne = async (filter, proj) => {
  return await room.findOne(filter, proj);
};
const readByID = async (id, proj) => {
  return await room.findById(id, proj);
};

const readAll = async (filter, proj) => {
  return await room.find(filter, proj);
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

const temp1 = { name: "aaa2", maxOfPeople: 4, hourlyCost: 3 };
// const temp2 = { name: "bb2", maxOfPeople: 4, hourlyCost: 3 };
async function test1() {
  return console.log(await create(temp1));
}

test1();

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
