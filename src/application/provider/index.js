import { createContext, useState } from "react";

const Provider = ({ children }) => {
  const [state, setState] = useState(localStorage.getItem("favs") ? 
  JSON.parse(localStorage.getItem("favs")) : []);
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
export default Provider;
