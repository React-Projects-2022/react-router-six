import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../application/provider";

const Navbar = () => {
  const [state] = useContext(AppContext);
  return (
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
        <span>Histórico de favoritos: {state.join(", ")}</span>
      </nav>
      
    </>
  );
};

export default Navbar;
