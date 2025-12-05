import Link from "next/link";
import React from "react";

const OrderPage = () => {
  return (
    <div>
      OrderPage
      <Link className="text-blue-400 underline" href="/order/123">
        Go to order page
      </Link>
    </div>
  );
};

export default OrderPage;
