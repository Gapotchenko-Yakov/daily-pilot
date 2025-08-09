'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Container,
  Paper,
} from '@mui/material';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res?.ok) router.push('/dashboard');
    else setError('Неверный email или пароль');
  }

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Вход в систему
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            required
            label="Email"
            name="email"
            type="email"
            margin="normal"
            autoComplete="email"
          />

          <TextField
            fullWidth
            required
            label="Пароль"
            name="password"
            type="password"
            margin="normal"
            autoComplete="current-password"
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Войти
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
