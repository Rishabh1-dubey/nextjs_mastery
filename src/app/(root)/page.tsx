import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../../auth";
import ROUTES from "../../../constants/route";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mb-2 ">
        Assingment has to be done
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button className="bg-white text-black cursor-pointer" type="submit">
          Logout
        </Button>
      </form>
    </div>
  );
};
export default Home;
