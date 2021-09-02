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
  res.json(newBlog);
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const blogs = await BlogModal.find({ user: req.user.id }).lean();
    res.json(blogs);
  } catch (err) {
    console.log(err);
  }
};

export const editBlog = (req: Request, res: Response) => {
  const {
    id,
    title,
    discreaption,
  }: { id: string; title: string; discreaption: string } = req.body;
  BlogModal.findByIdAndUpdate(
    id,
    { id: id, title: title, discreaption: discreaption },
    { new: true },
    (err, doc) => {
      if (err) {
        return res.json({ msg: err });
      } else {
        return res.json(doc);
      }
    }
  );
};

export const deleteBlog = (req: Request, res: Response) => {
  const { id }: { id: string } = req.body;
  BlogModal.findByIdAndDelete(id, { new: true }, (err, doc) => {
    if (err) {
      return res.json({ msg: err });
    } else {
      return res.json({ id: id });
    }
  });
};
