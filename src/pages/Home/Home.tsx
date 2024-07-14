import { FC, ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

interface HomeProps extends ComponentPropsWithoutRef<"main"> {}

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
    </main>
  );
};

export { Home };
