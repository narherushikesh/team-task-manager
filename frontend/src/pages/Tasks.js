import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [users, setUsers] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [assignedTo, setAssignedTo] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  useEffect(() => {
    fetchTasks();

    fetchUsers();
  }, []);

  const fetchTasks = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await API.get("/tasks", {
        headers: {
          authorization: token,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await API.get("/user", {
        headers: {
          authorization: token,
        },
      });

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async () => {
    try {
      const token =
        localStorage.getItem("token");

      await API.post(
        "/tasks",
        {
          title,
          description,
          assignedTo,
          deadline,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      alert("Task Created");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Task Management</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={input}
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          style={input}
        />

        <select
          value={assignedTo}
          onChange={(e) =>
            setAssignedTo(
              e.target.value
            )
          }
          style={input}
        >
          <option>
            Select Team Member
          </option>

          {users.map((user) => (
            <option
              key={user._id}
              value={user._id}
            >
              {user.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={deadline}
          onChange={(e) =>
            setDeadline(
              e.target.value
            )
          }
          style={input}
        />

        <button
          onClick={createTask}
          style={button}
        >
          Create Task
        </button>
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        {tasks.map((task) => (
          <div
            key={task._id}
            style={card}
          >
            <h2>{task.title}</h2>

            <p>{task.description}</p>

            <p>
              Assigned To:
              {" "}
              {task.assignedTo?.name}
            </p>

            <p>
              Deadline:
              {" "}
              {task.deadline
                ? new Date(
                    task.deadline
                  ).toDateString()
                : "No Deadline"}
            </p>

            <p>
              Status:
              {" "}
              {task.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const button = {
  padding: "12px 20px",
  border: "none",
  borderRadius: "10px",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "20px",
};

export default Tasks;