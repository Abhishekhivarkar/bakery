const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    wallet: { type: Number, default: 0 },
    purchasedNotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
