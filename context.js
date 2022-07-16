import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {

  const [theme, setTheme] = useState('dark-theme');

  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem('theme', theme);
    // eslint-disable-next-line
  }, [theme]);

 

  const themeHandler = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else if (theme === 'light-theme') {
      setTheme('dark-theme');
    }
  };

  return (
    <AppContext.Provider value={{ theme, themeHandler, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
