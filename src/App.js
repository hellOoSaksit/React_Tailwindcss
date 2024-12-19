
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Private Route Component
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {/* Register Route */}
          <Route path="/register" element={<Register />} />

          {/* Private Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <>
                  <Header setIsLoggedIn={setIsLoggedIn} />
                  <Home />
                  <Sidebar />
                  <Footer />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
