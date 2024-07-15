import { FC, ComponentPropsWithoutRef } from "react";

interface Recs {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  stars: number;
  url: string;
}

interface RecommendationsProps extends ComponentPropsWithoutRef<"div"> {
  recs: Recs[];
}

const Recommendations: FC<RecommendationsProps> = ({ recs, ...props }) => {
  return (
    <div {...props} className="my-container">
      <div className="flex justify-between items-center mb-6">
        <div className="text-[32px] font-semibold">Tövsiyə edirik</div>
        <div className="flex gap-2 text-[#00B207]">
          Ətraflı <img src="./arrow.svg" alt="arrow" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-6">
          {recs.map((rec) => (
            <div key={rec.id}>
              <img src={rec.url} alt={rec.title} />
              <div className="flex justify-between items-center px-5 py-4">
                <div className="flex flex-col gap-1">
                  <div>{rec.title}</div>
                  <div className="text-xs">
                    {rec.inStock ? "STOKDA" : "Yoxdur"}
                  </div>
                  <div className="font-semibold">{rec.price.toFixed(2)} ₼</div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={
                          index < rec.stars
                            ? "./star-colored.svg"
                            : "./star-uncolored.svg"
                        }
                        alt={`Star ${index + 1}`}
                        className="h-4 w-4"
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 p-2.5 rounded-full">
                  <img src="./cart-icon.svg" alt="cart-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Recommendations };
