import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../application/provider";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [state] = useContext(AppContext);
  const { t } = useTranslation("navbar");
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          {t("home")}
        </Link>
        <Link to="/contact" style={{ padding: 5 }}>
          {t("contact")}
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          {t("about")}
        </Link>
        <Link to="/admin" style={{ padding: 5 }}>
          {t("admin")}
        </Link>
        <Link to="/notfound" style={{ padding: 5 }}>
          {t("not_found")}
        </Link>
        <span>{t("fav_history")} {state.join(", ")}</span>
      </nav>
    </>
  );
};

export default Navbar;
