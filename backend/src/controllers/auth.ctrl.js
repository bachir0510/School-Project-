import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });

    const existUser = await User.findOne({ email: email });
    if (existUser) {
      res.status(400).json({
        ok: false,
        message: "Email exist",
      });
    } else {
      newUser.password = await bcrypt.hash(password, 10);
      const token = jwt.sign({ _id: newUser._id }, "sicret");
      await newUser.save();
      res.status(201).json({
        ok: true,
        message: "User was created successfully",
        data: newUser,
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await User.findOne({ email: email });
    if (!loginUser) {
      return res.status(400).json({
        ok: false,
        message: "wrong email",
      });
    }
    const match = await bcrypt.compare(password, loginUser.password);
    if (match) {
      const token = await jwt.sign({ _id: loginUser._id }, "sicret");
      res.status(200).json({
        ok: true,
        message: "Welcomeback",
        data: loginUser,
        token: token,
      });
    } else {
      res.status(400).json({
        ok: false,
        message: "Password is not correct",
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};
