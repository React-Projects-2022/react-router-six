import { useContext } from "react";
import { AppContext } from "../application/provider";

export const FavouriteRegistry = () => {
  const [state] = useContext(AppContext);

  return (
    <>
      {state.length > 0 ? (
        <>
          <p>Páginas favoritas:</p>
          <ul>
            {state.map((favourite, index) => (
              <li key={index}>{favourite}</li>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
};
