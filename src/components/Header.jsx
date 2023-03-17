import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to={"/"}>
      <h1 className="header">Northcoders News</h1>
    </Link>
  );
}

export default Header;
