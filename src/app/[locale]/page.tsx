'use client';

import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Login from "../components/Login";

export default function Home() {
  const theme = createTheme({
    palette: {
      mode: 'light'
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Login />
      </Container>
    </ThemeProvider>
  );
}
