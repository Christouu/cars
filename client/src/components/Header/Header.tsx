import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul className="links">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <li className="link">Home</li>
        </Link>
        <Link to={"/createCar"} style={{ textDecoration: "none" }}>
          <li className="link">Create Car</li>
        </Link>
        <Link to={"/createRegion"} style={{ textDecoration: "none" }}>
          <li className="link">Create Region</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
