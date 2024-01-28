import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState();
  const { postID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/posts/${postID}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  });

  return (
    <>
      {post && <h1>{post.title}</h1>}
      {post && <h3>{post.desc}</h3>}
    </>
  );
};

export default PostDetails;
