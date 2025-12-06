import Link from "next/link";

const OrderPage = async () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Order Dashboard</h1>
      <Link className="underline" href="order/123">
        go to orderid page
      </Link>
    </div>
  );
};

export default OrderPage;
