import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

const Button = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  outline,
  small,
}: Props) => {
  return (
    <>
      <button
        className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 duration-300 px-5 w-full ${
          outline
            ? "bg-white border-black text-black"
            : "bg-rose-500 border-rose-500 text-white"
        } ${
          small
            ? "py-1 text-sm font-light border-[1px]"
            : "py-3 font-semibold border-2"
        }`}
        disabled={disabled}
        onClick={onClick}
      >
        {Icon && <Icon className={"absolute left-4 top-3"} size={24} />}
        {label}
      </button>
    </>
  );
};

export default Button;
