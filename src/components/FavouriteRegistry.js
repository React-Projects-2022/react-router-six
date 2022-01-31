import { useContext } from "react";
import { AppContext } from "../application/provider";
import { useTranslation } from "react-i18next";
export const FavouriteRegistry = () => {
  const [state] = useContext(AppContext);
  const { t } = useTranslation("favourite");
  return (
    <>
      {state.length > 0 ? (
        <>
          <p>{t("registry_pages")}</p>
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
