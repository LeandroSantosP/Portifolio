import { createContext, useContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { usePresistenState } from '../utils/usePresistenState';
import light from '../styles/themes/themeLight';
import dark from '../styles/themes/themeDark';

interface ThemeProviderContext {
   children: React.ReactNode;
}

interface themeContextProps {
   toggleTheme: () => void
   theme: DefaultTheme
}

const themeContext = createContext({} as themeContextProps);

export const useThemeContext = () => useContext(themeContext);


export const ThemeToggleProvider = ({ children }: ThemeProviderContext) => {
   const [theme, setTheme] = usePresistenState<DefaultTheme>('light', light);

   const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light)
   }

   return (
      <themeContext.Provider value={{ toggleTheme, theme }}>
         {children}
      </themeContext.Provider>
   )
}
