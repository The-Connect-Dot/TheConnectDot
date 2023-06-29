import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([{ title: "Loading..." }]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://backend-connectdot.vmplay.ml/all-blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setError("No Blogs available...");
        } else {
          setError("More...");
        }
        setBlogs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="m-bg-primary p-2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(16,50,204,255)",
      }}
    >
      <marquee
        width="100%"
        direction="left"
        scrollamount="5"
        onmouseover="this.stop();"
        onmouseout="this.start();"
        className=""
      >
        <span className="text-white">
          {blogs.map((blog, index) => (
            <Link to={`/mentorblog/${blog._id}`} key={index}>
              <span style={{ color: "white" }}>{blog.title} | </span>
            </Link>
          ))}
          {error}
        </span>
      </marquee>
    </div>
  );
};

export default HomeBlogs;
