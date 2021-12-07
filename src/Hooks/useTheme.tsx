import React, { useState } from 'react';

type IDefaultTheme = 'light' | 'dark';

const useTheme = (defaultTheme: IDefaultTheme = 'light') => {
    const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    // business logic
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme,];
}

const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
      <>
      </>
  );
}