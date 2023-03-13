import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav">
        <Link to={"/"}>
          <h2>Home</h2>
        </Link>
        <Link to={"/Topics"}>
          <h2>Topics</h2>
        </Link>
        <Link to={"/Users"}>
          <h2>Users</h2>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
