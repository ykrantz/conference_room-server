const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  meetingDate: { type: Date },
  startHour: { type: Date, required: true },
  endHour: { type: Date, required: true },
  roomId: { type: mongoose.SchemaTypes.ObjectId, ref: "room" },
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "user" },
  bookDate: { type: Date, default: Date.now },
  urlCalender: String,
  bookCost: { type: Number },
  // payMethod: { type: mongoose.SchemaTypes.ObjectId, ref: "payMethod" },
  creditCoins: {
    monthly: { type: Number },
    credit: { type: Number },
    purchase: { type: Number },
  },
});

module.exports = mongoose.model("booking", bookingSchema);
