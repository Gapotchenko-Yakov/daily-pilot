import { FC } from "react";
import { Task } from "@prisma/client";
import Link from "next/link";
import styles from "./page.module.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const TaskPage: FC = async () => {
  await new Promise((resolve) => {
    setTimeout(() => resolve("data"), 2000);
  });

  const res = await fetch(`${baseUrl}/api/tasks`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const tasks: Task[] = await res.json();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tasks</h2>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <Link href={`/tasks/${task.id}`} className={styles.link}>
              <span>{task.description}</span>
              <span>{task.status}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
