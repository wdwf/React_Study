import { ReactNode, createContext, useState } from "react";

type ThemeProp = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeProp);

/*
Esse provider é usado para alterar o contexto
*/
export const ThemeProvider = ({ children }: any): JSX.Element => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

