import crypto from "crypto";
import { Router } from "express";
import { signUp, logIn, getUser } from "../contorllers/index";
import { isAuth } from "../contorllers/services/microservices/auth";

export const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from server" });
});

router.get("/dashboard", (req, res) => {
  res.json({ msg: "dashboard" });
});

router.get("/getUser/:id", getUser);

router.get("/login", (req, res) => {
  console.log("user => " + req.user);
  res.json({ msg: "login failed" });
});

router.post("/", signUp);
router.post("/login", logIn);
