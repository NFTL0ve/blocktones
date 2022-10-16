const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "E-mail is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Use valid e-mail address"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    cart: [{
      item:{ 
      type: Schema.Types.ObjectId,
      required: [true, "Password is required"],
      ref: "Cart"
      }
    }],
  },
);

const User = model("User", userSchema);

module.exports = User;
