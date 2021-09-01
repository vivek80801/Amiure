import crypto from "crypto";
import { Router } from "express";
import { signUp, logIn } from "../contorllers/index";
import { isAuth } from "../contorllers/services/microservices/auth";

export const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from server" });
});

router.get("/dashboard", isAuth, (req, res) => {
  console.log(req.user);
  res.json({ msg: "dashboard" });
});

router.get("/getUser", (req, res) => {
  res.json({ msg: req.user });
});

router.post("/", signUp);
router.post("/login", logIn)
