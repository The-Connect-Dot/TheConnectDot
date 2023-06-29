import React from "react";
import "./Blogs.css";
import { useState } from "react";
import WriteBlog from "./WriteBlog";
import MyBlogs from "./MyBlogs";

const Blogs = () => {
  const [page, setPage] = useState("WriteBlogs");
  const handleBlogChange = (strin) => {
    setPage(strin);
  };

  return (
    <div className="blog-page">
      <div className="blogs-header">
        <div
          className="my-blogs"
          onClick={() => {
            handleBlogChange("Blogs");
          }}
        >
          My Blogs
        </div>
        <div
          className="write-blogs"
          onClick={() => {
            handleBlogChange("WriteBlogs");
          }}
        >
          Write Blog
        </div>
      </div>
      {page === "WriteBlogs" && (
        <>
          <WriteBlog />
        </>
      )}
      {page === "Blogs" && (
        <>
          <MyBlogs />
        </>
      )}
    </div>
  );
};

export default Blogs;
