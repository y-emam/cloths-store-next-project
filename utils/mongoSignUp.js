// import User from "@/models/user";
// import { connectToDB } from "@/utils/db";
// import bcrypt from "bcrypt";

// export default async function mongoSignUp(email, username, password) {
//   try {
//     console.log("here");
//     await connectToDB();

//     const hashedPassword = await bcrypt.hash(password, 10);

//     console.log(User);

//     // return await User.insert({ email, username, password: hashedPassword });
//     return true;
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// }
