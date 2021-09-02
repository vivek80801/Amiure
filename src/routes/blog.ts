import { Router } from "express";

export const BlogRouter = Router();

BlogRouter.post("/createblog", (req, res) => {
  console.log(req.body);
  res.json({ msg: "ok" });
});
