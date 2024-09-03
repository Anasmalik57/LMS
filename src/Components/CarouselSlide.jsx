import React from "react";

function CarouselSlide({
  image,
  title,
  description,
  slideNumber,
  totalslides,
}) {
  return (
    <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
      <div className="flex items-center justify-center gap-8 px-[15%] ">
        <a
          href={`#slide${slideNumber === 1 ? totalslides : slideNumber - 1}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <div className="flex flex-col justify-center items-center">
          <img
            src={image}
            className="w-40 h-40 rounded-full border-2 border-gray-700"
            alt={title}
          />
          <q className="text-[1rem] leading-snug text-gray-200 text-center max-w-[21rem] tracking-wider">
            {description}
          </q>
          <h3 className="text-xl font-semibold tracking-widest font-mono text-violet-600 pt-2">
            {title}
          </h3>
        </div>
        <a
          href={`#slide${(slideNumber % totalslides) + 1 === 1 ? totalslides + 1 : (slideNumber % totalslides) + 1}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
}

export default CarouselSlide;
