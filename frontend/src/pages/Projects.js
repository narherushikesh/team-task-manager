import React, { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/projects", {
        headers: {
          authorization: token,
        },
      });

      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProject = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/projects",
        {
          title,
          description,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      alert("Project Created");

      setTitle("");
      setDescription("");

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#2563eb",
          marginBottom: "25px",
        }}
      >
        📁 Project Management
      </h1>

      {/* Create Project */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <h2>Create Project</h2>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          style={{
            ...inputStyle,
            height: "100px",
          }}
        />

        <button
          onClick={createProject}
          style={buttonStyle}
        >
          ➕ Create Project
        </button>
      </div>

      {/* Project Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project) => (
          <div
            key={project._id}
            style={{
              background: "white",
              width: "320px",
              padding: "25px",
              borderRadius: "15px",
              boxShadow:
                "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#2563eb",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                color: "#555",
                marginTop: "15px",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button style={viewBtn}>
                View
              </button>

              <button style={deleteBtn}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "12px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

const viewBtn = {
  padding: "10px 15px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "10px 15px",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Projects;