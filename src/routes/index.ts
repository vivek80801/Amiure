import crypto from "crypto";
import { Router } from "express";
import { signUp, logIn, getUser } from "../contorllers/index";
import { isAuth } from "../contorllers/services/microservices/auth";

export const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from server" });
});

router.get("/dashboard", isAuth, (req, res) => {
  res.json({
    msg: "dashboard",
    user: req.user,
  });
});

router.get("/getUser/:id", getUser);

router.get("/api/login", (req, res) => {
  console.log("user => " + req.user);
  res.json({ msg: "login failed" });
});

router.get("/api/json", (req, res) => {
  res.json({ msg: "it works" });
});

router.post("/api/signup", signUp);
router.post("/api/login", logIn);
