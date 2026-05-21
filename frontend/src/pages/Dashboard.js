import React, { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/dashboard", {
        headers: {
          authorization: token,
        },
      });

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cards = [
    {
      title: "Projects",
      value: data.totalProjects || 0,
      color: "#2563eb",
    },
    {
      title: "Tasks",
      value: data.totalTasks || 0,
      color: "#7c3aed",
    },
    {
      title: "Pending",
      value: data.pendingTasks || 0,
      color: "#f59e0b",
    },
    {
      title: "Completed",
      value: data.completedTasks || 0,
      color: "#22c55e",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(to right, #2563eb, #7c3aed)",
          borderRadius: "18px",
          padding: "22px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
            }}
          >
            Dashboard 🚀
          </h1>

          <p
            style={{
              marginTop: "8px",
            }}
          >
            Manage your projects and tasks.
          </p>
        </div>

        <button
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "10px",
            background: "white",
            color: "#2563eb",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          + Create Task
        </button>
      </div>

      {/* Horizontal Cards */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "180px",
              background: "white",
              borderRadius: "15px",
              padding: "18px",
              boxShadow:
                "0 5px 15px rgba(0,0,0,0.08)",
              borderTop: `5px solid ${card.color}`,
            }}
          >
            <h3
              style={{
                color: "#666",
                marginBottom: "10px",
                fontSize: "15px",
              }}
            >
              {card.title}
            </h3>

            <h1
              style={{
                color: card.color,
                fontSize: "28px",
                margin: 0,
              }}
            >
              {card.value}
            </h1>
          </div>
        ))}
      </div>

      {/* Bottom Sections */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Activity */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "white",
            borderRadius: "18px",
            padding: "22px",
            boxShadow:
              "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Recent Activity
          </h2>

          <Activity text="✅ Task Completed" />

          <Activity text="📁 Project Added" />

          <Activity text="📝 Task Updated" />

          <Activity text="👥 Team Member Joined" />
        </div>

        {/* Progress */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "white",
            borderRadius: "18px",
            padding: "22px",
            boxShadow:
              "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Task Progress
          </h2>

          <ProgressBar
            label="Completed"
            value={70}
            color="#22c55e"
          />

          <ProgressBar
            label="Pending"
            value={40}
            color="#ef4444"
          />

          <ProgressBar
            label="In Progress"
            value={55}
            color="#f59e0b"
          />
        </div>
      </div>
    </div>
  );
}

function Activity({ text }) {
  return (
    <div
      style={{
        background: "#f5f7fb",
        padding: "14px",
        borderRadius: "10px",
        marginBottom: "12px",
      }}
    >
      {text}
    </div>
  );
}

function ProgressBar({
  label,
  value,
  color,
}) {
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span>{label}</span>

        <span>{value}%</span>
      </div>

      <div
        style={{
          width: "100%",
          height: "10px",
          background: "#e5e7eb",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: color,
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Dashboard;