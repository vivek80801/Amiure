import { Request, Response, NextFunction } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  console.log("user => " + req.user);
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.json({ msg: "you are not valid user" });
  }
};
