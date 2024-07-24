import User from "@/models/user";
import { connectToDB } from "@/utils/db";
import bcrypt from "bcrypt";

export default async function mongoSignUp(email, username, password) {
  try {
    await connectToDB();

    const hashedPassword = await bcrypt.hash(password, 10);

    return await User.create({ email, username, password: hashedPassword });
  } catch (err) {
    console.log(err);
    return null;
  }
}
