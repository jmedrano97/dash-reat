import React from "react";

const CardTorneos = (props) => {
  const { img, description, name, link } = props;

  return (
    <a href={link}>
      <div className="bg-[#1F1D2B] rounded-xl grid grid-cols-4 items-center gap-2 text-center text-gray-300 hover:border-first border border-transparent transition duration-300 transform hover:scale-105">
        <img
          src={`/public/${img}`}
          className="w-40 h-40 object-cover shadow-2xl rounded-full"
        />
        <div className="flex flex-col col-span-2">
          <p className="text-xl">{name}</p>
          <span className="text-gray-400">{name}</span>
          <p className="text-gray-600">{description}</p>

        </div>
      </div>
    </a>
  );
};

export default CardTorneos;

