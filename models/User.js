import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    unique: [truq, "Username must be unique!"],
    required: [true, "Username is required!"],
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: [true, "Email must be unique!"],
    required: [true, "Email is required!"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
