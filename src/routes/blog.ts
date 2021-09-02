import { Router } from "express";
import { isAuth } from "../contorllers/services/microservices/auth";
import { createBlog, getBlog, editBlog, deleteBlog } from "../contorllers/blog";

export const BlogRouter = Router();

BlogRouter.post("/createblog", isAuth, createBlog);
BlogRouter.put("/editblog", isAuth, editBlog);
BlogRouter.delete("/delete", isAuth, deleteBlog);
BlogRouter.get("/blogs", isAuth, getBlog);
