import React from "react";

const OrderId = async ({ searchParams }) => {
  const { q } = searchParams;
  return (
    <div>
      OrderId
      <h2>the order id is that :{q}</h2>
      <p className="mb-4">
        Search Query:{" "}
        <span className="font-bold text-blue-600">{searchParams.q}</span>
      </p>
    </div>
  );
};

export default OrderId;
