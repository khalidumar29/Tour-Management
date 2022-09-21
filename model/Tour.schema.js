const mongoose = require("mongoose");

// ---> SCHEMA
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      trim: true,
      unique: [true, "name must be unique"],
    },
    picture: {
      type: String,
      required: [true, "A tour must have a picture"],
      unique: [true, "picture must be unique"],
    },
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    company: {
      type: String,
      required: [true, "A tour must have a company"],
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
      required: [true, "User phone number required"],
    },
    phone: {
      type: String || Number,
      required: [true, "A tour must have a phone number"],
    },
    address: {
      type: String,
      required: [true, "A tour must have a address"],
    },
    about: {
      type: String,
      required: [true, "A tour must have a description"],
    },
  },
  { timestamps: true }
);
// ---> MODEL
module.exports.Tour = mongoose.model("Tour", tourSchema);
