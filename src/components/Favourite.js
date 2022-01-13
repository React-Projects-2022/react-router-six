import { useContext } from "react";
import { AppContext } from "../application/provider";
import PropTypes from "prop-types";
export const Favourite = ({ selectPage }) => {
  const [state, setState] = useContext(AppContext);
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
          Añadir a favoritos
        </button>
      ) : (
        <button
          onClick={() => {
            const newState = state.filter((el) => el !== selectPage);
            localStorage.setItem("favs", JSON.stringify(newState));
            setState(newState);
          }}
        >
          Eliminar de favoritos
        </button>
      )}
    </>
  );
};

// Para obligar pasar el argumento para el objeto
Favourite.propTypes = {
  selectPage: PropTypes.string.isRequired,
};
