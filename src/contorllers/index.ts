import crypto from "crypto";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { User } from "./services/user";
import { UserModal } from "../modals/user";

export const seceret = process.env.SECRET ?? "something";

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
  res.json({ msg: "ok" });
};

export const getUser = (req: Request, res: Response) => {
  const id = req.params.id;
  UserModal.findById(id).then((user) => {
    if (!user) {
      return res.json({ user: "" });
    } else {
      const newUser = {
        username: user.username,
        email: user.email,
      };
      return res.json(newUser);
    }
  });
};

export const logIn = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(200).json(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(200).json(err);
      }
      return res.redirect("/dashboard");
    });
  })(req, res, next);
};
