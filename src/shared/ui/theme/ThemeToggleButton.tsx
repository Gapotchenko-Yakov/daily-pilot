'use client';

import { Button } from '@mui/material';
import { useThemeMode } from '@/shared/providers/ThemeProvider';

export function ThemeToggleButton() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Button variant="contained" onClick={toggleTheme}>
      Switch to {mode === 'light' ? 'dark' : 'light'} mode
    </Button>
  );
}
