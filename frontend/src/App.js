import { useState } from "react";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";

import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("signup");

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #eef2ff, #f8fafc)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Signup Page */}
      {page === "signup" && (
        <div style={authContainer}>
          <div style={leftPanel}>
            <h1 style={title}>
              Team Task Manager 🚀
            </h1>

            
          </div>

          <div style={rightPanel}>
            <Signup />

            <p style={switchText}>
              Already have an account?
            </p>

            <button
              onClick={() => setPage("login")}
              style={switchBtn}
            >
              Go To Login
            </button>
          </div>
        </div>
      )}

      {/* Login Page */}
      {page === "login" && (
        <div style={authContainer}>
          <div style={leftPanel}>
            <h1 style={title}>
              Welcome Back 👋
            </h1>

            <p style={desc}>
              Login and continue managing
              your projects and tasks.
            </p>
          </div>

          <div style={rightPanel}>
            <Login setPage={setPage} />

            <p style={switchText}>
              Don't have an account?
            </p>

            <button
              onClick={() => setPage("signup")}
              style={switchBtn}
            >
              Create Account
            </button>
          </div>
        </div>
      )}

      {/* Dashboard Layout */}
      {(page === "dashboard" ||
        page === "projects" ||
        page === "tasks") && (
        <div
          style={{
            display: "flex",
          }}
        >
          {/* Sidebar */}
          <Navbar setPage={setPage} />

          {/* Main Content */}
          <div
            style={{
              flex: 1,
              padding: "25px",
            }}
          >
            {page === "dashboard" && (
              <Dashboard />
            )}

            {page === "projects" && (
              <Projects />
            )}

            {page === "tasks" && <Tasks />}
          </div>
        </div>
      )}
    </div>
  );
}

const authContainer = {
  display: "flex",
  minHeight: "100vh",
};

const leftPanel = {
  flex: 1,
  background:
    "linear-gradient(to bottom right, #2563eb, #7c3aed)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "60px",
};

const rightPanel = {
  flex: 1,
  background: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const title = {
  fontSize: "52px",
  marginBottom: "20px",
};

const desc = {
  fontSize: "18px",
  lineHeight: "32px",
};

const switchText = {
  marginTop: "20px",
};

const switchBtn = {
  marginTop: "10px",
  padding: "12px 20px",
  border: "none",
  borderRadius: "10px",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

export default App;