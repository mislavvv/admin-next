import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>nextjs Dashboard</h1>

      <Link href="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default Dashboard;
