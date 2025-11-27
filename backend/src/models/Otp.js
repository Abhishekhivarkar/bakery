const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: { type: String },
    phone: { type: String },
    code: { type: String, required: true },
    name: { type: String },
    password: { type: String },

    // expires in 5 min
    expiresAt: {
      type: Date,
      default: () => Date.now() + 5 * 60 * 1000,
      index: { expires: "5m" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Otp", otpSchema);
