// "use client";
import Image from "next/image";
import React from "react";

type Props = {
  src?: string | null | undefined
};

const Avatar = ({src}: Props) => {
  return (
    <Image
      className="rounded-full"
      height={34}
      width={34}
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
