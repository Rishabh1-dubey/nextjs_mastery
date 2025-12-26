import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import ROUTES from "../../../constants/route";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6 mb-32">
        <NavLinks />
      </div>
      <div className="flex flex-col  gap-3">
        <div className="flex flex-col gap-3">
          <Button
            className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none cursor-pointer"
            asChild
          >
            <Link href={ROUTES.SIGN_IN}>
              <Image
                src="/icons/account.svg"
                alt="account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Link>
          </Button>

          <Button
            className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none cursor-pointer"
            asChild
          >
            <Link href={ROUTES.SIGN_UP} className="flex items-center gap-2">
              <Image
                src="/icons/sign-up.svg"
                alt="account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign UP
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
