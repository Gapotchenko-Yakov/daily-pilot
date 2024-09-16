import React from "react";

const TaskPage = ({ params: { id } }: { params: { id: number } }) => {
  return <div>Task Page id: {id}</div>;
};

export default TaskPage;
