import React from "react";

const OrderId = async ({ searchParams, params }) => {
  // ERROR 1 FIX: Await BOTH params and searchParams
  const { orderId } = await params;
  const { q } = await searchParams;

  return (
    <div>
      <h1>Order id page Dashboard</h1>
      <p>Your orderid is :{orderId}</p>

      <div>
        <p>
          Your Searhparams is {q}
          {q ? (
            <p>
              Here is your desired search is{" "}
              <strong className="text-green-500">{q}</strong>
            </p>
          ) : (
            <p>Opps! something went wrong:(</p>
          )}
        </p>
      </div>
    </div>
  );
};
export default OrderId;
