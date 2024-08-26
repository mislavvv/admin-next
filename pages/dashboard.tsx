import Link from "next/link";
import React from "react";

const dashboard = () => {
  return (
    <div>
      <h1>nextjs Dashboard</h1>

      <Link href="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default dashboard;
