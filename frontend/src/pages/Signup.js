import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(res.data.message);

      navigate("/");

    } catch (error) {

      alert("Registration failed");

    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #11998e, #38ef7d)",
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
          Create Account ✨
        </h1>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

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
            style={buttonStyleGreen}
          >
            Signup
          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have account?

          <Link
            to="/"
            style={{
              color: "white",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            Login
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

const buttonStyleGreen = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  background: "#00c853",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default Signup;