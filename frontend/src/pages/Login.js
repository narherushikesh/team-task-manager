import { useState } from "react";
import API from "../services/api";

function Login({ setPage }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      setPage("dashboard");
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div style={card}>
      <h1 style={heading}>Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={input}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={input}
      />

      <button
        onClick={handleLogin}
        style={button}
      >
        Login
      </button>
    </div>
  );
}

const card = {
  width: "400px",
};

const heading = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#2563eb",
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const button = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Login;