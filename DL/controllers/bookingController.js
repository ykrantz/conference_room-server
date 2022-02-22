require("../db").connect();
const { booking } = require("../models/indexModels");

const create = async ({
  meetingDate,
  startTime,
  endTime,
  room,
  user,
  logDate,
  payMethod,
  calenderLink,
  purchaseCost,
  payedBy: { monthly, credit, purchase },
}) => {
  return await booking.create({
    meetingDate,
    startTime,
    endTime,
    room,
    user,
    logDate,
    payMethod,
    calenderLink,
    purchaseCost,
    payedBy: {
      monthly,
      credit,
      purchase,
    },
  });
};

const readOne = async (filter, proj) => {
  return await booking.findOne(filter, proj);
};

const readOneAndPopulate = async (filter, proj, fieldToPopulate) => {
  return await booking.findOne(filter, proj).populate(fieldToPopulate);
};
const readByID = async (id, proj) => {
  return await booking.findById(id, proj);
};

const readAll = async (filter, proj) => {
  return await booking.find(filter, proj);
};

const readAllAndPopulate = async (filter, fieldToPopulate) => {
  return await booking.find(filter).populate(fieldToPopulate);
};

const update = async (filter, newValue) => {
  return booking.findOneAndUpdate(filter, newValue, { new: true });
};

const deleteOne = async (filter) => {
  return booking.findOneAndDelete(filter);
};

module.exports = {
  create,
  readOne,
  readByID,
  readAll,
  readOneAndPopulate,
  readAllAndPopulate,
  update,
  deleteOne,
};

//
// tests:

// const temp1 = {
//   meetingDate: 1645136502241,
//   startTime: 1645136502241,
//   endTime: 1645136592241,
//   room: "620ec03e326f9e45a5b580aa",
//   user: "620ec63edfa0706358507412",
//   logDate: 1645136502241,
//   //   payMethod: { type: mongoose.SchemaTypes.ObjectId, ref: "PayMethod" },
//   calenderLink: "URL",
//   purchaseCost: 3,
//   payedBy: {
//     monthly: 4,
//     credit: 5,
//     purchase: 6,
//   },
// };

// const temp2 = {
//   meetingDate: 1645136502241,
//   startTime: 1645136502241,
//   endTime: 1645136592241,
//   room: "620ec04f466f8889b2d95eec",
//   user: "620ec657027344e5353f7b87",
//   logDate: 1645136502241,
//   //   payMethod: { type: mongoose.SchemaTypes.ObjectId, ref: "PayMethod" },
//   calenderLink: "URL222",
//   purchaseCost: 23,
//   payedBy: {
//     monthly: 24,
//     credit: 25,
//     purchase: 26,
//   },
// };

// const temp3 = { room: "620ec04f466f8889b2d95eec" };
// const popString = "user room";
// const temp4 = { room: "620ec03e326f9e45a5b580aa" };
// const temp5 = { room: "620ec04f466f8889b2d95eec" };

// async function test1() {
//   console.log("@@@");
//   const ans1 = await create(temp1);
//   const ans2 = await create(temp2);
//   console.log({ ans1 }, { ans2 });
// }

// console.log("^^^^");
// // test1();

// async function test2() {
//   const ans2 = await readOne(temp3);
//   const ans2b = await readAll(temp4);

//   console.log({ ans2 }, { ans2b });
// }
// // test2();

// async function test2B() {
//   const ans2 = await readOneAndPopulate(temp3, popString);
//   const ans2b = await readAllAndPopulate(temp4, popString);
//   const ans2c = await readByID("620ecbbdf476f38fe0fc9dd8");

//   console.log({ ans2 }, { ans2b }, { ans2c });
//   // console.log({ ans2 });
// }

// console.log("$$$");
// test2B();

// async function test3() {
//   const ans3 = await update(temp3, temp5);
//   console.log({ ans4 });
// }

// console.log("@@@@");
// // test3();

// async function test4() {
//   const ans4 = await deleteOne(temp5);
//   console.log({ ans4 });
// }

// console.log("&&&&");
// // test4();
