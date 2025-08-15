import type React from "react";

type CardProps = {
  title?: string;
  largeParagraph?: string;
  mediumParagraph?: string;
  smallParagraph?: string;
  icon?: React.ReactNode;
  className?: string;
};

function Card({
  title,
  smallParagraph,
  mediumParagraph,
  largeParagraph,
  icon,
  className,
}: CardProps) {
  return (
    <div
      className={`flex flex-col items-start bg-white p-3 rounded-lg shadow-md w-full h-full ${
        className || ""
      }`}
    >
      <div className="flex items-center text-left mb-1 gap-1 p-1 w-full">
        {icon}
        <h2 className="text-xsfont-bold text-[#FFB43C] flex-1">
          {title}
        </h2>
      </div>
      <hr className="border-[#FFB43C] w-full" />
      <div className="flex-1 flex flex-col justify-between w-full">
        {largeParagraph && (
          <p className="p-3 text-black text-2xl font-bold p-3 text-left">
            {largeParagraph}
          </p>
        )}
        {mediumParagraph && (
          <p className="p-3 text-black text-base text-left">
            {mediumParagraph}
          </p>
        )}
        {smallParagraph && (
          <p className="p-3 text-black text-sm text-left">
            {smallParagraph}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
