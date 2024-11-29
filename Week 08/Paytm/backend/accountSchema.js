const { mongoose } = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, //reference to user model
    ref: "User",
  },
  balance: {
    type: Number,
  },
});

module.exports = Account = mongoose.model("Account", accountSchema);
