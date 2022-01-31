import { useContext } from "react";
import { AppContext } from "../application/provider";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
export const Favourite = ({ selectPage }) => {
  const [state, setState] = useContext(AppContext);
  const { t } = useTranslation("favourite");
  return (
    <>
      {!state.includes(selectPage) ? (
        <button
          onClick={() => {
            const newState = [...state, selectPage];
            localStorage.setItem("favs", JSON.stringify(newState));
            setState(newState);
          }}
        >
          {t("add")}
        </button>
      ) : (
        <button
          onClick={() => {
            const newState = state.filter((el) => el !== selectPage);
            localStorage.setItem("favs", JSON.stringify(newState));
            setState(newState);
          }}
        >
          {t("delete")}
        </button>
      )}
    </>
  );
};

// Para obligar pasar el argumento para el objeto
Favourite.propTypes = {
  selectPage: PropTypes.string.isRequired,
};
