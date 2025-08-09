'use client';

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import {
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { lightTheme, darkTheme } from '@/shared/lib/theme';

interface Props {
  children: ReactNode;
}

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('useThemeMode must be used within ThemeProvider');
  return context;
}

export default function ThemeProvider({ children }: Props) {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null;
    if (savedMode) setMode(savedMode);
  }, []);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', next);
      return next;
    });
  };

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
