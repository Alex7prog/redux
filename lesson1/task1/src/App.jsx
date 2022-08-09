import React, { useState, useEffect } from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemedButton onClick={toggleTheme}>Dynamic Theme</ThemedButton>
      </ThemeContext.Provider>

      <ThemedButton onClick={toggleTheme}>Default Theme</ThemedButton>
    </div>
  );
};

export default App;
