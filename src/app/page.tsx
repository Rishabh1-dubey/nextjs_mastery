import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mb-2 ">
        Assingment has to be done
      </h1>
      <div className="border border-b-red-400"></div>

      <h1 className="text-center mb-3">
        hello everyone this is my new nextjs project
      </h1>
      <div className="">
        <ol className="flex justify-around">
          <Link href="/products">
            <li>products</li>
          </Link>

          <Link href="/cart">
            <li>cart</li>
          </Link>
          <Link href="/order">
            <li>Order</li>
          </Link>
          <Link href="/checkout">
            <li>checkout</li>
          </Link>
          <Link href="/account">
            <li>account</li>
          </Link>
        </ol>
      </div>
    </div>
  );
}
