import Add from "./Add.js";
import "./App.css";
import NavBar from "./NavBar.js";
import PostDetails from "./PostDetails.js";
import Posts from "./Posts.js";
import { Routes, Route, Link } from "react-router-dom";
import Edit from "./edit.js";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="row">
          <div className="col-2 p-0">
            <Link to="/">get All Tasks</Link>
          </div>
          <div className="col-10 p-0">
            <Routes>
              <Route path=":postID" element={<PostDetails />} />
              <Route path="/" element={<Posts />} />

              <Route path="/add" element={<Add />} />
              <Route path="posts/:postID" element={<Edit />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
