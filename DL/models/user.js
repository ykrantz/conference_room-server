const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  isManager: { type: Boolean },
  registerDate: { type: Date, default: new Date() },
  createDate: { type: Date, default: new Date() },
  isRegistered: { type: Boolean },
  creditCoins: {
    monthlyCoins: { type: Number },
    currentMonthBalance: { type: Number },
    nextMonthBalance: { type: Number },
    purchasedBalance: { type: Number },
  },
});

module.exports = mongoose.model("User", userSchema);
