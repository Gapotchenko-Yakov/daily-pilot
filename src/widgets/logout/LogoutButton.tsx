'use client';
import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: 'grey.100',
        },
      })}
      onClick={() => signOut({ callbackUrl: '/login' })}
    >
      Выйти
    </Button>
  );
}
