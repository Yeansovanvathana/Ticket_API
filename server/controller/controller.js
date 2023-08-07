const dotenv = require("dotenv");

dotenv.config();

var UserDB = require("../model/model");

// view all user:
exports.findAll = async (req, res) => {
  UserDB.find()
    .then((user) => {
      res.send(user);
      console.log("Request: Successful.");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error Occurred while retriving user information",
      });
    });
};
// create user:
exports.create = async (req, res) => {
  const { ticketId, transactionId, phoneNumber } = req.body;

  if (!ticketId || !transactionId || !phoneNumber) {
    return res
      .status(400)
      .send({
        success: false,
        message: "Please provide all required information.",
      });
  }

  const newUser = new UserDB({
    ticketId,
    transactionId,
    phoneNumber,
  });

  try {
    const createdUser = await newUser.save();
    res.status(201).send({ success: true, user: createdUser });
  } catch (error) {
    res
      .status(500)
      .send({
        success: false,
        message: "Error creating user.",
        error: error.message,
      });
  }
};

exports.deleteMany = async (req, res) => {
  try {
    const result = await UserDB.deleteMany({});
    res.status(200).send({
      message: "All users have been deleted.",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    res.status(500).send({
      message: "Error occurred while deleting users.",
      error: err.message,
    });
  }
};
