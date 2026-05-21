import { useState } from "react";
import API from "../services/api";

function Signup() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", {
        name,
        email,
        password,
        role: "Member",
      });

      alert("Signup Successful");
    } catch (error) {
      alert("Signup Failed");
    }
  };

  return (
    <div style={card}>
      <h1 style={heading}>Signup</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) =>
          setName(e.target.value)
        }
        style={input}
      />

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
        onClick={handleSignup}
        style={button}
      >
        Signup
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
  color: "#16a34a",
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
  background: "#16a34a",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Signup;