import crypto from "crypto";
import { Request, Response } from "express";
import { User } from "./services/user";

const seceret = process.env.SECRET ?? "something";

export const signUp = (req: Request, res: Response) => {
  const {
    username,
    email,
    password,
  }: { username: string; email: string; password: string } = req.body;
  const newPassword = crypto
    .createHmac("sha256", seceret)
    .update(password)
    .digest("hex");
  const newUser = new User.myUser(username, email, newPassword);
  newUser.save();
  res.json({ username: username, email: email });
};
