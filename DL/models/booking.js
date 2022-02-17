const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  meetingDate: { type: Date },
  startTime: { type: Date },
  endTime: { type: Date },
  room: { type: mongoose.SchemaTypes.ObjectId, ref: "Room" },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  logDate: { type: Date },
  payMethod: { type: mongoose.SchemaTypes.ObjectId, ref: "PayMethod" },
  calenderLink: { type: String },
  purchaseCost: { type: Number },
  payedBy: {
    monthly: { type: Number },
    credit: { type: Number },
    purchase: { type: Number },
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
