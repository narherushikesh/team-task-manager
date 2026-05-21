const Task = require("../models/Task");
const Project = require("../models/Project");

const getDashboard = async (req, res) => {
  try {
    const tasks = await Task.find();

    const projects =
      await Project.find();

    const overdueTasks =
      tasks.filter(
        (task) =>
          task.deadline &&
          new Date(task.deadline) <
            new Date() &&
          task.status !== "Completed"
      );

    res.json({
      totalProjects: projects.length,

      totalTasks: tasks.length,

      pendingTasks: tasks.filter(
        (task) =>
          task.status === "Pending"
      ).length,

      completedTasks: tasks.filter(
        (task) =>
          task.status === "Completed"
      ).length,

      inProgressTasks: tasks.filter(
        (task) =>
          task.status === "In Progress"
      ).length,

      overdueTasks:
        overdueTasks.length,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};