import { FC, ComponentPropsWithoutRef, useState } from "react";

interface Categories {
  id: number;
  title: string;
  url: string;
}

interface CarouselProps extends ComponentPropsWithoutRef<"div"> {
  categories: Categories[];
}

const Carousel: FC<CarouselProps> = ({ categories, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCategories = [
    ...categories.slice(currentIndex, currentIndex + 6),
    ...categories.slice(0, Math.max(0, (currentIndex + 6) % categories.length)),
  ].slice(0, 6);

  const prev = () => {
    setCurrentIndex((currentIndex - 6 + categories.length) % categories.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 6) % categories.length);
  };

  return (
    <div {...props} className="my-container">
      <div className="flex justify-between items-center">
        <div className="text-[32px] font-semibold">Kateqoriyalar</div>
        <div className="flex gap-2 text-[#00B207]">
          Hamısına bax <img src="./arrow.svg" alt="arrow" />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        {visibleCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-4 py-4 bg-white rounded-md border-2 border-[#E6E6E6]"
          >
            <img src={category.url} alt={category.title} />
            <div>{category.title}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-3 mt-3">
        <button
          className="border-gray-400 rounded-full border-2"
          onClick={prev}
        >
          <img src="./left.svg" alt="left-arrow" />
        </button>
        <button
          className="border-gray-400 rounded-full border-2"
          onClick={next}
        >
          <img src="./right.svg" alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export { Carousel };
