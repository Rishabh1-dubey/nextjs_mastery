import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      {" "}
      product page
      <Link href="/products/rishi">
        <li>go to rishi page</li>
      </Link>
    </div>
  );
};

export default Page;
