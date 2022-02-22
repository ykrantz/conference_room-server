require("../db").connect();
const { user } = require("../models/indexModels");

const create = async ({
  firstName,
  lastName,
  email,
  password,
  isManager,
  registerDate,
  createDate,
  isRegistered,
  creditCoins: {
    monthlyCoins,
    currentMonthBalance,
    nextMonthBalance,
    purchasedBalance,
  },
}) => {
  return await user.create({
    firstName,
    lastName,
    email,
    password,
    isManager,
    registerDate,
    createDate,
    isRegistered,
    creditCoins: {
      monthlyCoins,
      currentMonthBalance,
      nextMonthBalance,
      purchasedBalance,
    },
  });
};
const readOne = async (filter, proj) => {
  return await user.findOne(filter, proj);
};
const readByID = async (id, proj) => {
  return await user.findById(id, proj);
};
const readAll = async (filter, proj) => {
  return await user.find(filter, proj);
};

const update = async (filter, newValue) => {
  return user.findOneAndUpdate(filter, newValue, { new: true });
};

const deleteOne = async (filter) => {
  return user.findOneAndUpdate(filter, { isActive: false }, { new: true });
  // return user.findOneAndDelete(filter);
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

// const temp1 = {
//   firstName: "ab5",
//   lastName: "cd2",
//   email: "emal2",
//   password: "pas1234",
//   isManager: true,
//   //   registerDate: { type: Date, default: new Date() },
//   //   createDate: { type: Date, default: new Date() },
//   isRegistered: false,
//   creditCoins: {
//     monthlyCoins: 3,
//     currentMonthBalance: 2,
//     nextMonthBalance: 3,
//     purchasedBalance: 34,
//   },
// };

// const temp2 = {
//   firstName: "wx",
//   lastName: "qz",
//   email: "emal2",
//   // isManager: { type: Boolean },
//   // registerDate: { type: Date, default: new Date() },
//   // createDate: { type: Date, default: new Date() },
//   // isRegistered: { type: Boolean },
//   creditCoins: {
//     monthlyCoins: 5,
//     currentMonthBalance: 8,
//     nextMonthBalance: 1,
//     //   purchasedBalance: { type: Number },
//   },
// };
// const temp3 = { firstName: "ab5" };
// const temp4 = { firstName: "ab" };
// const temp5 = { firstName: "abUpdate" };
// async function test1() {
//   console.log("@@@");
//   return await create(temp1);
// }

// // test1();

// async function test2() {
//   const ans2 = await readOne(temp3);
//   //   const ans3 = await findAllUser(temp4);
//   console.log({ ans2 });
//   // console.log({ ans2 }, { ans3 });
//   //   const ans4 = await updateUser(temp3, temp5);
//   //   const ans5 = await deleteUser(temp5);
//   //   console.log({ ans5 });
//   //   console.log({ ans2 });
//   //   return await findOneUser("name", "aaa");
// }

// console.log("$$$");
// test2();
