import { Request, Response, NextFunction } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  console.log("session => " + JSON.stringify(req.session));
  console.log("auth => " + req.isAuthenticated());
  console.log("express user => " + req.user);
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({ msg: "you are not valid user" });
  }
};
