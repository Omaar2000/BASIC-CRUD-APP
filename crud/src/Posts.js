import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const deletePost = (post) => {
    fetch(`http://localhost:9000/posts/${post.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        fetch("http://localhost:9000/posts")
          .then((res) => res.json())
          .then((data) => setPosts(data))
      );
  };

  return (
    <>
      <h1 className="text-start">Tasks</h1>
      <div className="d-flex">
        <Link className="btn btn-success" to="/add">
          Add New Task
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        {posts.map((post) => {
          return (
            <tbody>
              <tr>
                <th>{post.id}</th>
                <td>{post.title}</td>
                <td>{post.desc}</td>
                <td>
                  <button
                    className="btn btn-danger me-1 btn-sm"
                    onClick={() => deletePost(post)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary me-1 btn-sm"
                    to={`${post.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-secondary btn-sm"
                    to={`posts/${post.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Posts;
