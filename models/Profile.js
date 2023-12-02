const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    birthday: {
      type: Date,
      required: [true, "Please enter a birthday"],
      default: Date.now(),
    },
    address: {
      country: {
        name: {
          type: String,
        },
        countryId: {
          type: ObjectId,
          ref: "Country",
        },
      },
      state: {
        name: {
          type: String,
        },
        stateId: {
          type: ObjectId,
          ref: "State",
        },
      },
      city: {
        name: {
          type: String,
        },
        cityId: {
          type: ObjectId,
          ref: "City",
        },
      },
    },
    gander: {
      name: {
        type: String,
      },
      ganderId: {
        type: ObjectId,
        ref: "Gander",
      },
    },
    hairColor: {
      name: {
        type: String,
      },
      hairColorId: {
        type: ObjectId,
        ref: "HairColor",
      },
    },
    eyeColor: {
      name: {
        type: String,
      },
      eyeColorId: {
        type: ObjectId,
        ref: "EyeColor",
      },
    },
    bodyType: {
      name: {
        type: String,
      },
      bodyTypeId: {
        type: ObjectId,
        ref: "BodyType",
      },
    },
    height: {
      name: {
        type: String,
      },
      heightId: {
        type: ObjectId,
        ref: "Height",
      },
    },
    about: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    coverPicture: {
      type: String,
    },
    gallery: [
      {
        type: String,
      },
    ],
    liveStatus: {
      type: String,
      enum: ["online", "offline"],
      default: "offline",
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Profile", profileSchema);

module.exports = User;
