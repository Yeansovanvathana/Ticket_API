const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  ticketId: {
    type: String,
    require: true,
  },
  transactionId: {
    type: String,
    require: true,
  },

  phoneNumber: {
    type: String,
    require: true,
  },
})

var UserDB = mongoose.model("user", schema);

module.exports = UserDB;
