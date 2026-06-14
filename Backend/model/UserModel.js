const { model } = require("mongoose");

const { UserSchema } = require("../schemas/UserSchema");

module.exports = new model("User", UserSchema);
