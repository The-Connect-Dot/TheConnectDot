import React, { useState, useEffect } from "react";
import Alert from "../../../Alert/Alert";
import Onload from "../../../Onload/Onload";
import image from "./empty.jpg";
import "./Blogs.css";
export default function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const localData = localStorage.getItem("ConnectDot");
  if (!localData) {
    window.location.href = "/login";
  }
  const token = JSON.parse(localData).userId;
  var result;
  useEffect(() => {
    const load = async () => {
      const data = { token: token };
      const response = await fetch(
        "https://backend-connectdot.vmplay.ml/my-blogs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      result = await response.json();
    };
    load();
    setTimeout(() => {
      setLoading(false);
      setBlogs(result);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Onload />}
      {!loading && (
        <>
          <div className="my-blogs-page">
            {blogs.length === 0 && (
              <>
                <div className="empty-blogs">
                  <img src={image} alt="" />
                  You Don't have any blogs.
                </div>
              </>
            )}
            {blogs.length !== 0 && (
              <>
                {blogs.map((blog, index) => (
                  <div key={index}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
