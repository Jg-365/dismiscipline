import type React from "react";

type CardProps = {
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  icon3?: React.ReactNode;
  icon4?: React.ReactNode;
  className?: string;
};

function Navbar({
  icon1,
  icon2,
  icon3,
  icon4,
  className,
}: CardProps) {
  return (
    <div
      className={`flex flex-row bg-white rounded-full shadow-md ${
        className || ""
      }`}
    >
      <div className="flex justify-evenly p-4 gap-6 w-full">
        {icon1}
        {icon2}
        {icon3}
        {icon4}
      </div>
    </div>
  );
}

export default Navbar;
