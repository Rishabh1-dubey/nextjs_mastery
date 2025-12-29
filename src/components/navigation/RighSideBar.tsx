import Link from "next/link";
import React from "react";
import { id } from "zod/locales";
import ROUTES from "../../../constants/route";
import Image from "next/image";
import TagCards from "../card/TagCards";

const RighSideBar = () => {
  const hotQuestoins = [
    { _id: "1", title: "How to create a custom hook in react?" },
    { _id: "2", title: "what is javascript?" },
    { _id: "3", title: "what is redux and redux toolkit?" },
    { _id: "4", title: "what is fronntend and how to connect with bakend?" },
  ];

  const popularTags = [
    { _id: "1", name: "javascript", question: 100 },
    { _id: "2", name: "React", question: 200 },
    { _id: "3", name: "TypeScript", question: 150 },
    { _id: "4", name: "Redux", question: 70 },
  ];
  return (
    <section className="pt-32 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestoins.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                height={20}
                width={20}
                alt="chevron"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* popular tags */}
      <div className="mt-6">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, question }) => (
            <TagCards
              key={_id}
              _id={_id}
              name={name}
              question={question}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RighSideBar;
