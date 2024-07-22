import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema({
  Adminname: {
    type: String,
    unique: [truq, "Admin must be unique!"],
    required: [true, "Admin is required!"],
  },
  password: {
    type: String,
  },
});

const Admin = models.Admin || model("Admin", AdminSchema);

export default Admin;
