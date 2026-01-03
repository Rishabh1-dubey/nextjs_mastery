import { Button } from "@/components/ui/button";
import { auth } from "../../../auth";
import Link from "next/link";
import ROUTES from "../../../constants/route";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import LocalSearch from "@/components/search/LocalSearch";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-8 relative text-center">
        <LocalSearch />
      </section>
      HoemFIlter
      <div className="mt-10 w-full flex-col gap-6">
        <p>question 1</p>
        
        <p>question 1</p>
        <p>question 1</p>
      </div>
    </>
  );
};
export default Home;
