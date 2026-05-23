import {
  FaTasks,
  FaUsers,
  FaSignOutAlt,
  FaClipboardList,
} from "react-icons/fa";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  const pieData = [
    { name: "Completed", value: 8 },
    { name: "Pending", value: 4 },
    { name: "In Progress", value: 2 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF4B5C"];

  const barData = [
    { name: "Low", value: 1 },
    { name: "Medium", value: 2 },
    { name: "High", value: 3 },
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f7fc",
      }}
    >

      {/* SIDEBAR */}

      <div
        style={{
          width: "240px",
          background: "white",
          padding: "25px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            width="90"
          />

          <h2>Admin</h2>

          <p>admin@gmail.com</p>

        </div>

        <div style={menuStyle}>
          <FaTasks /> Dashboard
        </div>

        <div style={menuStyle}>
          <FaClipboardList /> Manage Tasks
        </div>

        <div style={menuStyle}>
          <FaUsers /> Team Members
        </div>

        <div
          style={menuStyle}
          onClick={logout}
        >
          <FaSignOutAlt /> Logout
        </div>

      </div>


      {/* MAIN CONTENT */}

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >

        {/* TOP CARD */}

        <div
          style={{
            background:
              "linear-gradient(to right, #4776E6, #8E54E9)",
            padding: "30px",
            borderRadius: "20px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >

          <div>

            <h1>Welcome Back 👋</h1>

            <p>Manage your tasks efficiently</p>

          </div>

          <button
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer",
            }}
          >
            Create New Task
          </button>

        </div>


        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >

          <div style={cardStyle}>
            <h3>Total Tasks</h3>
            <h1>12</h1>
          </div>

          <div style={cardStyle}>
            <h3>Pending Tasks</h3>
            <h1>4</h1>
          </div>

          <div style={cardStyle}>
            <h3>In Progress</h3>
            <h1>2</h1>
          </div>

          <div style={cardStyle}>
            <h3>Completed</h3>
            <h1>6</h1>
          </div>

        </div>


        {/* CHARTS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(400px,1fr))",
            gap: "30px",
            marginTop: "40px",
          }}
        >

          {/* PIE CHART */}

          <div style={chartCard}>

            <h2>Task Distribution</h2>

            <ResponsiveContainer width="100%" height={300}>

              <PieChart>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                >

                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>


          {/* BAR CHART */}

          <div style={chartCard}>

            <h2>Task Priority Levels</h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={barData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#8884d8"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

const menuStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  background: "#f4f7fc",
};

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const chartCard = {
  background: "white",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

export default Dashboard;