require("../db").connect();

const { User } = require("../models/indexModels");

const createUser = async ({
  firstName,
  lastName,
  email,
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
  return await User.create({
    firstName,
    lastName,
    email,
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
const findOneUser = async (findBy) => {
  return await User.findOne(findBy);
};

const findAllUser = async (findBy) => {
  return await User.find(findBy);
};

const updateUser = async (findBy, newValue) => {
  return User.findOneAndUpdate(findBy, newValue, { new: true });
};

const deleteUser = async (findBy) => {
  return User.findOneAndDelete(findBy);
};

module.exports = {
  createUser,
  findOneUser,
  findAllUser,
  updateUser,
  deleteUser,
};

//
// tests:

const temp1 = {
  firstName: "ab2",
  lastName: "cd2",
  email: "emal2",
  isManager: true,
  //   registerDate: { type: Date, default: new Date() },
  //   createDate: { type: Date, default: new Date() },
  isRegistered: false,
  creditCoins: {
    monthlyCoins: 3,
    currentMonthBalance: 2,
    nextMonthBalance: 3,
    purchasedBalance: 34,
  },
};

const temp2 = {
  firstName: "wx",
  lastName: "qz",
  email: "emal2",
  // isManager: { type: Boolean },
  // registerDate: { type: Date, default: new Date() },
  // createDate: { type: Date, default: new Date() },
  // isRegistered: { type: Boolean },
  creditCoins: {
    monthlyCoins: 5,
    currentMonthBalance: 8,
    nextMonthBalance: 1,
    //   purchasedBalance: { type: Number },
  },
};
const temp3 = { firstName: "ab2" };
const temp4 = { firstName: "ab" };
const temp5 = { firstName: "abUpdate" };
async function test1() {
  console.log("@@@");
  return await createUser(temp1);
}

// test1();

async function test2() {
  //   const ans2 = await findOneUser(temp3);
  //   const ans3 = await findAllUser(temp4);
  //   console.log({ ans2 }, { ans3 });

  //   const ans4 = await updateUser(temp3, temp5);
  const ans5 = await deleteUser(temp5);
  console.log({ ans5 });
  //   const ans3 = await findOneUser("name", "aaa");
  //   console.log({ ans2 });
  //   return await findOneUser("name", "aaa");
}

console.log("$$$");
test2();
