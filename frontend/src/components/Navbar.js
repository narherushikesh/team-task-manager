function Navbar({ setPage }) {
  const logout = () => {
    localStorage.removeItem("token");

    alert("Logged Out");

    setPage("login");
  };

  return (
    <div
      style={{
        width: "240px",
        background: "white",
        minHeight: "100vh",
        padding: "20px",
        boxShadow: "2px 0 10px rgba(0,0,0,0.08)",
      }}
    >
      {/* Profile */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          width="90"
        />

        <h2>Rushikesh</h2>

        <p style={{ color: "gray" }}>
          Admin Panel
        </p>
      </div>

      <MenuButton
        text="📊 Dashboard"
        onClick={() => setPage("dashboard")}
      />

      <MenuButton
        text="📁 Projects"
        onClick={() => setPage("projects")}
      />

      <MenuButton
        text="📝 Tasks"
        onClick={() => setPage("tasks")}
      />

      <MenuButton
        text="🚪 Logout"
        onClick={logout}
      />
    </div>
  );
}

function MenuButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "15px",
        marginBottom: "15px",
        border: "none",
        borderRadius: "12px",
        background: "#eef2ff",
        cursor: "pointer",
        fontWeight: "bold",
        textAlign: "left",
        fontSize: "15px",
      }}
    >
      {text}
    </button>
  );
}

export default Navbar;