const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const e = require("express");

// Middlewares
app.use(express.json());
app.use(cors());

// Schema Design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [20, "Name can not be more than 20 characters"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: [true, "Username already exists"],
      minLength: [3, "Username can not be less than 3 characters"],
      maxLength: [20, "Username can not be more than 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: [true, "Email already exists"],
      maxLength: [50, "Email can not be more than 50 characters"],
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minLength: [8, "Password can not be less than 6 characters"],
      maxLength: [20, "Password can not be more than 20 characters"],
      validate: {
        validator: function (v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v);
        },
      },
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [21, "Age can not be less than 21"],
      max: [100, "Age can not be more than 100"],
      validate: {
        validator: function (v) {
          const isInteger = Number.isInteger(v);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: (props) => `${props.value} is not a valid age`,
    },
    gender: {
      type: String,
      enum: {
        values: ["Female", "Male", "Transgender", "Prefer not to say"],
        message: "",
      },
      required: [true, "Gender is required"],
    },
    address: [
      {
        street: {
          type: String,
          required: [true, "Street is required"],
          trim: true,
          maxLength: [50, "Street can not be more than 50 characters"],
        },
        city: {
          type: String,
          required: [true, "City is required"],
        },
        state: {
          type: String,
          required: [true, "State is required"],
        },
        country: {
          type: String,
          required: [true, "Country is required"],
        },
        zinCode: {
          type: Number,
          required: [true, "Zip Code is required"],
          min: [100000, "Zip Code can not be less than 100000"],
          max: [999999, "Zip Code can not be more than 999999"],
          validate: {
            validator: function (v) {
              const isInteger = Number.isInteger(v);
              if (isInteger) {
                return true;
              } else {
                return false;
              }
            },
          },
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],
    about: {
      type: String,
      trim: true,
      maxLength: [1000, "About can not be more than 1000 characters"],
    },
    caters: {
      type: String,
      enum: {
        values: ["Men", "Women"],
        message: "",
      },
    },
    bodyType: {
      type: String,
      enum: {
        values: ["Slim", "Athletic", "Average", "Heavy"],
        message: "",
      },
    },
    height: {
      type: Number,
      enum: {
        values: [
          4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.1, 4.11, 5.0, 5.1, 5.2,
          5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.1, 5.11, 6.0, 6.1, 6.2, 6.3, 6.4,
          6.5, 6.6, 6.7, 6.8, 6.9, 6.1, 6.11, 7.0,
        ],
        message: "",
      },
    },
    hairColor: {
      type: String,
      enum: {
        values: [
          "Black",
          "Brown",
          "Blonde",
          "Red",
          "Gray",
          "White",
          "Bald",
          "Other",
        ],
        message: "",
      },
    },
    eyeColor: {
      type: String,
      enum: {
        values: [
          "Black",
          "Brown",
          "Blue",
          "Green",
          "Gray",
          "Hazel",
          "Other",
          "Blind",
        ],
        message: "",
      },
    },

    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
      },
    },
    website: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
            v
          );
        },
      },
    },
    socialMedia: {
      facebook: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
              v
            );
          },
        },
      },
      twitter: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
              v
            );
          },
        },
      },
      instagram: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
              v
            );
          },
        },
      },
      onlyFans: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
              v
            );
          },
        },
      },
      whatsapp: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^\d{10}$/.test(v);
          },
        },
      },
      snapchat: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
              v
            );
          },
        },
      },
      tiktok: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
              v
            );
          },
        },
      },
      youtube: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
              v
            );
          },
        },
      },
    },
    category: {
      name: {
        type: String,
        required: [true, "Category name is required"],
      },
      _id: mongoose.Schema.Types.ObjectId,
    },
    availability: {
      type: String,
      enum: {
        values: ["Available", "Unavailable"], // 0 = Available, 1 = Unavailable
        message: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
