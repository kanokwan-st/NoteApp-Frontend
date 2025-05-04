import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyNotePage from "./pages/MyNotePage.jsx";
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import ProfilePage from "./pages/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/mynote", element: <MyNotePage /> },
      { path: "/profile", element: <ProfilePage /> },
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
      <App>
        <RouterProvider router={router} />
      </App>
    </ThemeProvider>
  </StrictMode>
);
