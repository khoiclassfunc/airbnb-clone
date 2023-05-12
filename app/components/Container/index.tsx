// "use client";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-5 lg:px-10 sm:px-4 px-4">
      {children}
    </div>
  );
};

export default Container;
