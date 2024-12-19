import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Snowfall from "react-snowfall";
import app from "../config/firebaseConfig";
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url('/img/bg-image.jpg')`, // ใช้รูป BG จาก public
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex", // Flexbox
        justifyContent: "center", // กึ่งกลางแนวนอน
        alignItems: "center", // กึ่งกลางแนวตั้ง
      }}
    >
      {/* Snowfall effect */}
      <Snowfall
        // images={images}
        snowflakeCount={100}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          background: "white",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "90%", // ให้ความกว้าง 90% สำหรับหน้าจอเล็ก
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
          เข้าสู่ระบบ
        </h1>
        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "16px" }}>
            {error}
          </p>
        )}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", color: "#333" }}>อีเมล</label>
            <input
              placeholder="อีเมล"
              type="email"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "8px", color: "#333" }}>รหัสผ่าน</label>
            <input
              placeholder="รหัสผ่าน"
              type="password"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              background: "#007BFF",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            เข้าสู่ระบบ
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "16px" }}>
          สมัครสมาชิกที่นี่:{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ color: "#007BFF", cursor: "pointer", textDecoration: "underline" }}
          >
            สมัครสมาชิก
          </span>
        </p>
        <p className="text-sm text-center mt-4">
          Email: user6402385@rsu.ac.th <br />
          Password: 123456
        </p>
      </div>
    </div>
  );
};

export default Login;
