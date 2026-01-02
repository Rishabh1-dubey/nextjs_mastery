import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const LocalSearch = () => {
  return (
    <div className="background-light800_darkgradient flex min-h-11 grow  items-center gap-4 rounded-[10px] px-4">
      <Image
        src="/icons/search.svg"
        height={20}
        width={20}
        className="cursor-pointer"
        alt="Search"
      />
      <Input
        type="text"
        placeholder="Search..."
        value=""
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none "
      />
    </div>
  );
};

export default LocalSearch;
