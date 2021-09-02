import { Router } from "express";
import { Blog } from "../contorllers/services/blog";
import { BlogModal } from "../modals/blog";
import { isAuth } from "../contorllers/services/microservices/auth";

export const BlogRouter = Router();

BlogRouter.post("/createblog", isAuth, (req, res) => {
  const {
    title,
    discreaption,
  }: { title: string; discreaption: string } = req.body;
  const newBlog = new Blog.myBlog(title, discreaption, req.user);
  newBlog.save();
  res.json({ msg: "ok" });
});

BlogRouter.get("/blogs", isAuth, async (req, res) => {
  try {
    //@ts-ignore
    const blogs = await BlogModal.find({ user: req.user.id }).lean();
    res.json({ blogs: blogs });
  } catch (err) {
    console.log(err);
  }
});
