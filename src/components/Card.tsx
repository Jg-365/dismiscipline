import type React from "react";

type CardProps = {
    title: string;
    paragraph: string;
    icon: React.ReactNode;
}

function Card({title, paragraph, icon}: CardProps) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-147">
        <div className='flex items-center justify-center mb-4 gap-2'>
            {icon}
            <p className="text-black">{paragraph}</p>
        </div>
        <hr className="border-gray-400 w-full"/>
        <h2 className="text-xl font-bold text-black">{title}</h2>
    </div>
  )
}

export default Card
