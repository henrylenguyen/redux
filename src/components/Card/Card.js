import React from "react";

const Card = () => {
  return (
    <div className="w-[400px] shadow-md p-5 m-5 rounded-2xl bg-white dark:bg-slate-900">
      <div className="card__image h-[250px] mb-5">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?compress=1&resize=768x576&vertical=top"
          alt="card_image "
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="card__content">
        <h3 className="mb-3 text-2xl   text-slate-600  font-bold card__title dark: text-white">
          3 ways to get free ticket to travel the world
        </h3>
        <p className="mb-5 text-sm dark: text-white text-slate-600 card__desc ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere
          reiciendis blanditiis possimus eum alias quo quaerat repellendus
          maiores, accusamus quibusdam, quam minima ab aut aperiam? Consequuntur
          repellat cupiditate quasi.
        </p>
        <a
          href="#"
          className="block bg-blue-500 p-4 text-lg font-semibold text-center text-white rounded-2xl "
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Card;
