import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav">
        <Link to={"/"}>
          <h2 id="navHome">Home</h2>
        </Link>
        <Link to={"/Topics"}>
          <h2 id="navTopic">Topics</h2>
        </Link>
        <Link to={"/Users"}>
          <h2 id="navUser">Users</h2>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
