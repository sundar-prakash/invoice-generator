// AppRoutes.tsx

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import InvoicePage from "./components/Invoice/InvoicePage";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppRoutes = () => {
  const isLoggedIn = () => {
    return !!sessionStorage.getItem("fail");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn() ? <Navigate to="/dashboard" replace /> : <LoginPage />
          }
        />
        <Route
          path="/"
          element={isLoggedIn() ? <ProtectedRoute /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

const ProtectedRoute = () => {
  return (
    <div>
      <Header />
      <div className="h-screen dark:text-white dark:bg-gray-900 bg-gray-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default AppRoutes;
