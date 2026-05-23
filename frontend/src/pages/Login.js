import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      navigate("/dashboard");

    } catch (error) {

      alert("Login failed");

    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
      }}
    >

      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          color: "white",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Welcome Back 👋
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyleBlue}
          >
            Login
          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Don't have account?

          <Link
            to="/signup"
            style={{
              color: "white",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
};

const buttonStyleBlue = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  background: "#007bff",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default Login;