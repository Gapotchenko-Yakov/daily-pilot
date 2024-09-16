import React from "react";

const FinancePage = ({ params: { id } }: { params: { id: number } }) => {
  return <div>Finance Page for the id: {id}</div>;
};

export default FinancePage;
