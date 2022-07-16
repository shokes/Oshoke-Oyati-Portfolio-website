import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  // const getStorageTheme = () => {
  //   let theme = 'dark-theme';
  //   if (localStorage.getItem('theme')) {
  //     theme = localStorage.getItem('theme');
  //   }
  //   return theme;
  // };

  //
  // const [theme, setTheme] = useState(getStorageTheme());
  const [theme, setTheme] = useState('dark-theme');

  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem('theme', theme);
    // eslint-disable-next-line
  }, [theme]);

  // useEffect(() => {
  //   // Perform localStorage action
  //   const item = localStorage.getItem('key');
  // }, []);

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
