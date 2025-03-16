/** @format */

import Blog from "../schema/BlogSchema.js";

const handleAddBlog = async (req, res) => {
  const { headline, blog, image, date } = req.body;

  const newBlog = await Blog.create({
    headline,
    blog,
    image,
    date,
  });
  res.send(newBlog)
};

export default handleAddBlog;