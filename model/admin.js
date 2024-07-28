import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  email: {
    type: String,
    unique: [true, "email must be unique!"],
    required: [true, "email is required!"],
  },
  password: {
    type: String,
  },
});

const Admin = models.Admin || model("Admin", AdminSchema);

export default Admin;
