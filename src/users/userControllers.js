const User = require("./userModel");
const bcrypt = require("bcryptjs");

var email;

// To signup a new user
exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      email: req.body.email,
      password: req.body.password,
      name: "to be added after login",
    });
    console.log(newUser);
    res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

// To check password and allow users to login
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      email = user.email;
      if (match) {
        const email = user.email;
        res.status(200).send({
          message: "login successful",
          value: true,
        });
      } else {
        res.send({
          error: "login failed",
          value: false,
        });
      }
    } else {
      res.status(500).send({ status: "error", user: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

//To get user details
exports.userDetails = async (req, res) => {
  try {
    const userList = await User.find({ email: `${req.body.email}` });
    res.status(200).send({
      users: userList,
    });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

//To add additional data after user logins
exports.userInfo = async (req, res) => {
  try {
    class Act {
      constructor(act, desc) {
        this.act = act;
        this.desc = desc;
      }
    }
    const filter = { email: email };
    const update = {
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      city: req.body.city,
      country: req.body.country,
      interests: req.body.interests.split(","),
      activity: new Act(req.body.activity, req.body.activityDescription),
    };
    const newUser = await User.findOneAndUpdate(filter, update, { new: true });
    // console.log(newUser)
    res.status(200).send({ "user-details": newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

// Delete user account after login
exports.deleteUser = async (req, res) => {
  try {
    const result = await User.deleteOne({ email: req.body.email });
    if (result) {
      res
        .status(200)
        .send({ message: `${req.body.email} deleted successfully` });
    } else {
      res.status(500).send({ message: `${req.body.email} not found` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
exports.listUser = async (req, res) => {
  try {
    // const userList = await User.find({email: `${req.body.email}`});
    const userList = await User.find({});
    res.status(200).send({
      users: userList,
    });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
