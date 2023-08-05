const dotenv = require("dotenv");

dotenv.config();

var UserDB = require("../model/model");

// view all user:
exports.findAll = async(req, res) => {
  UserDB.find()
    .then((user) => {
      res.send(user);
      console.log("Request: Successful.");
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
    });
};
 // create user:
exports.create = async (req, res) => {
  if (!req.body) {
    res
      .status(401)
      .send({ request: false, msg: "Please fill full information." });
    return;
  }
  console.log(req.body)
  // User:
  const newUser = new UserDB({
    ticketId: req.body.ticketId,
    transactionId: req.body.transactionId,
    phoneNumber: req.body.phoneNumber,
  });

  try{
    await newUser.save()
    res.status(201).send(newUser)
  } catch(e) {
    res.status(400).send(e)
  }
};

exports.deleteMany = async(req, res) => {
  UserDB.deleteMany({})
}