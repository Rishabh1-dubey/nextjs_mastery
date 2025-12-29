import { auth } from "../../../auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mb-2 ">
        Welcome to the Next.js
      </h1>
    </div>
  );
};
export default Home;
