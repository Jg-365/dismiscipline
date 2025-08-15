import type React from "react";

type CardProps = {
  title?: string;
  paragraph?: string;
  icon?: React.ReactNode;
  className?: string;
};

function Card({
  title,
  paragraph,
  icon,
  className,
}: CardProps) {
  return (
    <div
      className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-147 ${
        className || ""
      }`}
    >
      <div className="flex items-center text-left mb-1 gap-2">
        {icon}
        <h2 className="text-xl font-bold text-black">
          {title}
        </h2>
      </div>
      <hr className="border-gray-400 w-full" />
      <p className="text-black">{paragraph}</p>
    </div>
  );
}

export default Card;
