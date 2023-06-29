import React from "react";
import Onload from "../../Components/Onload/Onload";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MentorAllBlogs.css";
const MentorAllBlogs = () => {
  const [blogs, setBlogs] = useState([{ title: "Loading..." }]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://backend-connectdot.vmplay.ml/all-blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading && <Onload />}
      {!loading && (
        <div className="all-blog-page">
          <div className="all-blog-page-header">
            <h1>Blog Page</h1>
          </div>
          <div className="all-blog-page-body">
            {blogs.map((blog, index) => (
              <div className="all-blog-page-body-content" key={index}>
                <div className="all-blog-page-body-content-title">
                  <h2>{blog.title}</h2>
                </div>
                <Link
                  to={`/mentorblog/${blog._id}`}
                  key={index}
                  className="all-blog-page-body-content-icon"
                >
                  <span>&rarr; </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MentorAllBlogs;
