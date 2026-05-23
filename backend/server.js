require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({
      message: "Registration successful",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Registration failed",
    });

  }

});

app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      password,
    });

    if (!user) {

      return res.status(400).json({
        message: "Invalid email or password",
      });

    }

    res.status(200).json({
      message: "Login successful",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Login failed",
    });

  }

});

const PORT = process.env.PORT || 5000;

module.exports = app;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});