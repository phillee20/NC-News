import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav">
        <Link to={"/"}>
          <h2 id="navHome">Home</h2>
        </Link>
        <Link to={"/News"}>
          <h2 id="navNews">News</h2>
        </Link>
        <Link to={"/Topics"}>
          <h2 id="navTopic">Categories</h2>
        </Link>
        <Link to={"/Users"}>
          <h2 id="navUser">Users</h2>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
