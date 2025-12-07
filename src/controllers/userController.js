import userSchema from "../model/userSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      return res.status(400).json("data is not valid");
    }

    const userExists = await userSchema.findOne({ email });

    if (userExists) {
      return res.status(400).json("user already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = await userSchema.create({
      name: name,
      email: email,
      password: hashedpassword,
    });

    const token = jwt.sign({ id: existinguser._id }, process.env.JWT, {
      expiresIn: "5m",
    });

    newUser.token = token;
    await newUser.save();
    console.log(token);

    if (user) {
      return res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
