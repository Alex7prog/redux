import React, { useState } from 'react';
import ThemedButton from './ThemedButton';
import { light, dark, ThemeContext } from './themes-context';

const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    theme === light ? setTheme(dark) : setTheme(light);
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
