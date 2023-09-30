import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import theme from "./components/common/config/theme";
import Layout from "./components/common/Layout/Layout";
import PageNotFound from "./components/Error/PageNotFound";
import UserProvider from "./components/common/context/UserProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <SnackbarProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/projects" element={<Layout />} />
            <Route path="/dashboard" element={<Layout />} />
            <Route path="/staffing" element={<Layout />} />
            <Route path="/messages" element={<Layout />} />
            <Route path="/404" exact element={<PageNotFound />} />
            <Route path="/*" element={<Navigate to="/404" />} />
          </Routes>
        </SnackbarProvider>
      </UserProvider>
    </ThemeProvider>
  </BrowserRouter>
);
