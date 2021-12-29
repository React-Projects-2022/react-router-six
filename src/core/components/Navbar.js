import { Link } from "react-router-dom";

const Navbar = () => (
    <>
         <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        Home
      </Link>
      <Link to="/contact" style={{ padding: 5 }}>
        Contact
      </Link>
      <Link to="/about" style={{ padding: 5 }}>
        About
      </Link>
      <Link to="/admin" style={{ padding: 5 }}>
        Admin
      </Link>
      <Link to="/notfound" style={{ padding: 5 }}>
        Not found
      </Link>
    </nav>
    </>
);

export default Navbar;