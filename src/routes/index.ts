import { Router } from "express";
import {
  signUp,
  logIn,
  logOut,
  dashboard,
  getIndex,
} from "../contorllers/index";
import { isAuth } from "../contorllers/services/microservices/auth";

export const router = Router();

router.get("/", getIndex);
router.get("/dashboard", isAuth, dashboard);
router.post("/api/signup", signUp);
router.post("/api/login", logIn);
router.get("/api/logout", isAuth, logOut);
