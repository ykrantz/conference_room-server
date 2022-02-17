require("../db").connect();

const { Booking } = require("../models/indexModels");

const createBooking = async ({
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
  return await Booking.create({
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

const findOneBooking = async (findBy) => {
  return await Booking.findOne(findBy);
};

const findAllBooking = async (findBy) => {
  return await Booking.find(findBy);
};

const updateBooking = async (findBy, newValue) => {
  return Booking.findOneAndUpdate(findBy, newValue, { new: true });
};

const deleteBooking = async (findBy) => {
  return Booking.findOneAndDelete(findBy);
};

module.exports = {
  createBooking,
  findOneBooking,
  findAllBooking,
  updateBooking,
  deleteBooking,
};

//
// tests:

const temp1 = {
  meetingDate: 1645136502241,
  startTime: 1645136502241,
  endTime: 1645136592241,
  room: "620ec03e326f9e45a5b580aa",
  user: "620ec63edfa0706358507412",
  logDate: 1645136502241,
  //   payMethod: { type: mongoose.SchemaTypes.ObjectId, ref: "PayMethod" },
  calenderLink: "URL",
  purchaseCost: 3,
  payedBy: {
    monthly: 4,
    credit: 5,
    purchase: 6,
  },
};

const temp2 = {
  meetingDate: 1645136502241,
  startTime: 1645136502241,
  endTime: 1645136592241,
  room: "620ec04f466f8889b2d95eec",
  user: "620ec657027344e5353f7b87",
  logDate: 1645136502241,
  //   payMethod: { type: mongoose.SchemaTypes.ObjectId, ref: "PayMethod" },
  calenderLink: "URL222",
  purchaseCost: 23,
  payedBy: {
    monthly: 24,
    credit: 25,
    purchase: 26,
  },
};

const temp3 = { room: "620ec04f466f8889b2d95eec" };
const temp4 = { room: "620ec03e326f9e45a5b580aa" };
const temp5 = { room: "620ec04f466f8889b2d95eec" };

async function test1() {
  console.log("@@@");
  const ans1 = await createBooking(temp1);
  const ans2 = await createBooking(temp2);
  console.log({ ans1 }, { ans2 });
}
console.log("^^^^");
// test1();

async function test2() {
  const ans2 = await findOneBooking(temp3);
  const ans2b = await findAllBooking(temp4);
  console.log({ ans2 }, { ans2b });
}

console.log("$$$");
test2();

async function test3() {
  const ans3 = await updateBooking(temp3, temp5);
  console.log({ ans4 });
}

console.log("@@@@");
// test3();

async function test4() {
  const ans4 = await deleteBooking(temp5);
  console.log({ ans4 });
}

console.log("&&&&");
// test4();
