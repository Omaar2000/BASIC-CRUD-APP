import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-around ">
        <div class="container">
          <Link class="navbar-brand" to="/">
            DO TASK
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
