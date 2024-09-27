import { User } from "../models/user.model.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

// signup

export const signUp = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// login

export const logIn = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong user name");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const orignalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    orignalPassword !== req.body.password &&
      res.status(401).json("Wrong password");

    const tokenData = {
      id: user._id,
      isAdmin: user.isAdmin,
    };

    const accessToken = jwt.sign(tokenData, process.env.JWT_SEC, {
      expiresIn: "3d",
    });

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Something went wrong",
    });
  }
};
