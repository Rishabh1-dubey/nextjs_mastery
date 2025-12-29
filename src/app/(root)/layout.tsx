import LeftSideBar from "@/components/navigation/LeftSideBar";
import Navbar from "@/components/navigation/Navbar";
import RighSideBar from "@/components/navigation/RighSideBar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />

      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col  px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div> {children}</div>
        </section>
        <RighSideBar />
      </div>
    </main>
  );
};

export default RootLayout;
