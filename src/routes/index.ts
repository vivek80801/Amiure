import crypto from "crypto";
import { Router } from "express";
import { signUp } from "../contorllers/index";

export const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from server" });
});

router.post("/", signUp);
