const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  isManager: { type: Boolean, default: false },
  registerDate: { type: Date, default: Date.now },
  createDate: { type: Date, default: Date.now },
  isSubscribed: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  creditCoins: {
    monthlyCoins: { type: Number },
    currentMonthBalance: { type: Number },
    nextMonthBalance: { type: Number },
    purchasedBalance: { type: Number },
  },
});

module.exports = mongoose.model("user", userSchema);
