const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const validator = require("validator");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: [true, "This username is already registered"],
      trim: true,
      lowercase: true,
      minlength: [3, "Minimum username length is 3 characters"],
      maxlength: [20, "Maximum username length is 20 characters"],
      validate: [
        validator.isAlphanumeric,
        "Username can only contain letters and numbers",
        {
          no_symbols: true,
          ignore_whitespace: true,
        },
      ],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "This email is already registered"],
      trim: true,
      lowercase: true,
      validate: [
        validator.isEmail,
        "Please enter a valid email",
        {
          ignore_whitespace: true,
        },
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [8, "Minimum password length is 8 characters"],
      validate: [
        validator.isStrongPassword,
        "Please enter a strong password",
        {
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
          returnScore: false,
        },
      ],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password are not matching",
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profile: {
      type: ObjectId,
      ref: "Profile",
    },
    status: {
      type: String,
      enum: [
        "pending",
        "active",
        "inactive",
        "blocked",
        "deleted",
        "banned",
        "verified",
      ],
      default: "pending",
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hashSync(this.password, 12);

  this.confirmPassword = undefined;

  next();
});

userSchema.methods.correctPassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
