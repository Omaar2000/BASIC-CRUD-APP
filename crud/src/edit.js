import { useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { postID } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const pushPost = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/posts/${postID}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        desc: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <form className="text-start">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label text-start">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="text-start">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={pushPost}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Edit;
