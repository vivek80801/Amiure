import crypto from "crypto";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { User } from "./services/user";

export const seceret = process.env.SECRET ?? "something";

export const getIndex = (req: Request, res: Response) => {
  res.json({ msg: "hello from server" });
};

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

export const logIn = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(200).json(JSON.parse(err));
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(200).json(JSON.parse(err));
      }
      return res.redirect("/dashboard");
    });
  })(req, res, next);
};

export const logOut = (req: Request, res: Response) => {
  req.logout();
  res.json({ msg: "logout" });
};

export const dashboard = (req: Request, res: Response) => {
  res.json({
    msg: "dashboard",
    user: req.user,
  });
};
