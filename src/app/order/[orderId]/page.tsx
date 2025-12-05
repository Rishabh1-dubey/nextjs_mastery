import React from "react";

const OrderId = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      OrderId
      <h2>the order id is that :{id}</h2>
    </div>
  );
};

export default OrderId;
