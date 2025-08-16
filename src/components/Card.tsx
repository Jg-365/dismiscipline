import type React from "react";

type CardProps = {
  title?: string;
  largeParagraph?: string;
  mediumParagraph?: string;
  smallParagraph?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

function Card({
  title,
  smallParagraph,
  mediumParagraph,
  largeParagraph,
  icon,
  className,
  children,
}: CardProps) {
  return (
    <div
      className={`flex flex-col items-start bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-md w-full h-full ${
        className || ""
      }`}
    >
      <div className="flex items-center text-left mb-1 gap-1 p-1 w-full">
        <div className="flex-shrink-0">{icon}</div>
        <h2 className="text-xs sm:text-sm md:text-base font-bold text-[#FFB43C] flex-1 truncate">
          {title}
        </h2>
      </div>
      <hr className="border-[#FFB43C] w-full opacity-20" />
      <div className="flex items-center flex-col w-full flex-1">
        {largeParagraph && (
          <p className="p-2 sm:p-3 md:p-4 font-bold text-black text-lg sm:text-xl md:text-2xl text-center sm:text-left w-full">
            {largeParagraph}
          </p>
        )}
        {mediumParagraph && (
          <p className="p-2 sm:p-3 md:p-4 font-bold text-black text-sm sm:text-base md:text-lg text-center sm:text-left w-full">
            {mediumParagraph}
          </p>
        )}
        {smallParagraph && (
          <p className="p-2 sm:p-3 md:p-4 font-bold text-black text-xs sm:text-sm md:text-base text-center sm:text-left w-full">
            {smallParagraph}
          </p>
        )}
      </div>
      {children && (
        <div className="text-black text-xs sm:text-sm text-left w-full mt-auto">
          {children}
        </div>
      )}
    </div>
  );
}

export default Card;
