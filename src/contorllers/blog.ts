import { Request, Response } from "express";
import { Blog } from "./services/blog";
import { BlogModal } from "../modals/blog";

export const createBlog = (req: Request, res: Response) => {
  const {
    title,
    discreaption,
  }: { title: string; discreaption: string } = req.body;
  const newBlog = new Blog.myBlog(title, discreaption, req.user);
  newBlog.save();
  res.json({ msg: "ok" });
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const blogs = await BlogModal.find({ user: req.user.id }).lean();
    res.json({ blogs: blogs });
  } catch (err) {
    console.log(err);
  }
};
