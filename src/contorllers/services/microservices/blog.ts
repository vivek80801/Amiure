import { BlogModal } from "../../../modals/blog";

export const saveBlogToDatabase = (
  title: string,
  discreaption: string,
  user: any
) => {
  const newBlog = new BlogModal({
    title: title,
    discreaption: discreaption,
    user: user,
  });
  user.blogs.push(newBlog);
  user.save();
  newBlog.save();
};
