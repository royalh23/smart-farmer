import { FC, ComponentPropsWithoutRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "../../layouts/Carousel";
import { Recommendations } from "../../layouts/Recommendations";

interface HomeProps extends ComponentPropsWithoutRef<"main"> {}

const categories = [
  { id: 1, title: "Kənd yumurtası", url: "./egg.png" },
  { id: 2, title: "Meyvə", url: "./fruit.png" },
  { id: 3, title: "Tərəvəz", url: "./vegetable.png" },
  { id: 4, title: "Süd Məhsulları", url: "./dairy-products.png" },
  { id: 5, title: "Ət & Balıq", url: "./fish-meat.png" },
  { id: 6, title: "Bostan", url: "./garden.png" },
  { id: 7, title: "Çərəzlər", url: "./nuts.png" },
  { id: 8, title: "Dənli Bitkilər", url: "./plants.png" },
  { id: 9, title: "Arı məhsulları", url: "./bee-products.png" },
  { id: 10, title: "Toxumlar", url: "./seeds.png" },
  { id: 11, title: "Tomar və Turşular", url: "./tomato-pickles.png" },
  { id: 12, title: "Yağlar", url: "./oil.png" },
];

const recs = [
  {
    id: 0,
    title: "Nehrə Yağı",
    price: 15,
    inStock: true,
    stars: 4,
    url: "./nehre.png",
  },
  {
    id: 1,
    title: "Qaymaq",
    price: 15,
    inStock: true,
    stars: 4,
    url: "./qaymaq.png",
  },
  {
    id: 2,
    title: "Kənd toyuğu",
    price: 15,
    inStock: true,
    stars: 4,
    url: "./chicken.png",
  },
  {
    id: 3,
    title: "Camış qaymağı",
    price: 15,
    inStock: true,
    stars: 4,
    url: "./camis-qaymaq.png",
  },
  {
    id: 4,
    title: "Bal",
    price: 15,
    inStock: true,
    stars: 4,
    url: "./bal.png",
  },
  {
    id: 5,
    title: "Nehrə Yağı",
    price: 15,
    inStock: true,
    stars: 4,
    url: "./chicken-2.png",
  },
];

const Home: FC<HomeProps> = ({ ...props }) => {
  return (
    <main {...props}>
      <section className="mt-12 mb-7">
        <div className="my-container">
          <div className="flex gap-5">
            <div className="relative">
              <img src="./harvest.png" alt="harvest" />
              <p className="absolute top-0 text-white text-[26px] mt-16 mx-4">
                Sifarişiniz diqqət və sevgi ilə hazırlanır.
              </p>
            </div>
            <div className="relative">
              <img src="./cooking.png" alt="cooking" />
              <div className="absolute bottom-0 bg-[#ffffff2e] mb-12 mx-4 backdrop-blur-[8px] rounded-lg py-6 px-9">
                <p className="mb-6 text-[#0F7012] text-2xl font-extrabold max-w-[285px]">
                  Təbii kənd məhsullarını evinizə gətirdik
                </p>

                <Link
                  to={"/"}
                  className="max-w-[122px] flex text-white font-bold py-[10px] px-4 bg-[#0F7012] rounded-lg"
                >
                  <span className="flex gap-2">
                    Sifariş et <img src="./right-arrow.svg" alt="right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-7">
        <Carousel categories={categories} />
      </section>
      <section className="mb-24">
        <Recommendations recs={recs} />
      </section>
    </main>
  );
};

export { Home };
