const mongoose = require("mongoose");
const usiesDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    // to trim
    trim: true,
    // to make it required
    required: true,
  },
  userPass: {
    type: String,
    // to trim
    trim: true,
    // to make it required
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  toolStach: [
    {
      type: String,
    },
  ],
  // short way
  email: String,
  employeeAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
// create new collection
module.exports = mongoose.model("UsiesData", usiesDataSchema);
// work on old collection that we have
// module.exports = mongoose.model("UsiesData",usiesDataSchema, "UsiesData");
