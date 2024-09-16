import { FC } from "react";
import { Task } from "@prisma/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const TaskPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 2000);
  });

  const res = await fetch(`${baseUrl}/api/tasks`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const tasks: Task[] = await res.json();

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description}: ${task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
