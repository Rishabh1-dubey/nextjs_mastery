const OrderPage = async ({ searchParams }) => {
  // 1. Get the query param
  const { q } = await searchParams;
  console.log(q);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Order Dashboard</h1>
      {q ? (
        <p>
          You are looking for: <strong>{q}</strong>
        </p>
      ) : (
        <p>Please use the search bar or click a link to find an order.</p>
      )}
    </div>
  );
};

export default OrderPage;
