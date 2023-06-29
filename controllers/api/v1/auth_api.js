// requires/imports
const User = require("../../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// register user login
exports.registerUser = async (req, res, next) => {
  const { email, first_name, last_name, password, phone, role } = req.body;

  if (!email) {
    return res.status(400).json({ error: "You must enter an email address." });
  }

  if (!first_name || !last_name) {
    return res.status(400).json({ error: "You must enter your full name." });
  }

  if (!password) {
    return res.status(400).json({ error: "You must enter a password." });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "You have already registered" });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = new User({
    email,
    password: hash,
    first_name,
    last_name,
    phone,
    role,
  });

  const registeredUser = await user.save();

  const payload = {
    id: registeredUser.email,
  };

  const token = jwt.sign(payload, "loginkey", { expiresIn: "1d" });
  res.status(200).json({
    user: registeredUser,
    token: token,
    message: "Success",
  });

  try {
  } catch (error) {
    res.status(400).json({
      message: "Failure",
    });
  }
};
// login user login
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }
    if (!password) {
      return res.status(400).json({
        message: "Password is required",
      });
    }

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({
        message: "User does not exists",
      });
    }

    // match the password -write compare code

    const isMatch = await bcrypt.compare(password, userExists.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Password Incorrect",
      });
    }

    const payload = {
      id: userExists.email,
    };

    const token = jwt.sign(payload, "loginkey", { expiresIn: "1d" });

    res.status(200).json({
      user: userExists,
      token: token,
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      message: "Email or password is incorrect",
    });
  }
};
