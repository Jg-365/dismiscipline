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
      className={`flex flex-row bg-white rounded-full shadow-md w-full max-w-md mx-auto ${
        className || ""
      }`}
    >
      <div className="flex justify-evenly p-2 sm:p-4 gap-2 sm:gap-6 w-full">
        <div className="flex-1 flex justify-center">
          {icon1}
        </div>
        <div className="flex-1 flex justify-center">
          {icon2}
        </div>
        <div className="flex-1 flex justify-center">
          {icon3}
        </div>
        <div className="flex-1 flex justify-center">
          {icon4}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
