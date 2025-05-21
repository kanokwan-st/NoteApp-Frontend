import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import Layout from "./Layout.jsx";
import MyNotePage from "./pages/MyNotePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/mynote", element: <ProtectedRoute><MyNotePage /></ProtectedRoute> },
      { path: "/profile", element: <ProtectedRoute><ProfilePage /></ProtectedRoute> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

// SET THEME COLOR
const theme = createTheme({
  palette: {
    primary: {
      main: "#1c99ce",
      blue: "#2E2A72",
      purple: "#392F5A",
      darkPink: "#FF677D",
      teaPink: "#D4A5A5",
      pink: "#FFB3BA",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
