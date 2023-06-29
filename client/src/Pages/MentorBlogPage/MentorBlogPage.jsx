import React from "react";
// import "./MentorBlogPage.css";
import Onload from "../../Components/Onload/Onload";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function MentorBlogPage() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  var result = {};
  useEffect(() => {
    const load = async () => {
      const data = { id: id };
      const response = await fetch(
        "https://backend-connectdot.vmplay.ml/find-blog",
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
      setBlog(result[0]);
    }, 2000);
  }, []);
  return (
    <>
      {loading && <Onload />}
      {!loading && (
        <div className="blog-page">
          <div className="blog-page-header">
            <h1>Blog</h1>
          </div>
          <div className="blog-page-body">
            <div className="blog-page-body-content">
              <div className="blog-page-body-content-title">
                <h2>{blog.title}</h2>
              </div>
              <div className="blog-page-body-content-content">
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
