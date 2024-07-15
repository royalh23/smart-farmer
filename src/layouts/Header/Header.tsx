import { FC, ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
    <header {...props}>
      <div className="my-container">
        <div className="flex justify-between py-3">
          <div className="flex gap-2">
            <img src="package.svg" alt="package" />
            <Link to={"/"} className="text-[#1A1A1A]">
              Sifariş İzləmə
            </Link>
          </div>
          <div>
            <ul className="flex gap-5 font-medium text-[#1A1A1A]">
              <li>
                <a href="" className="flex gap-2">
                  <img src="operator.svg" alt="operator" />
                  *666
                </a>
              </li>
              <li>
                <a href="tel:+994-55-9999999">+994 55 9999999</a>
              </li>
              <li>
                <a href="mailto:info@smartfermer.az">info@smartfermer.az</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border border-[#D9D9D9] pt-4 pb-6">
        <div className="my-container">
          <div>
            <div className="flex items-center justify-between mb-6">
              <Link to={"/"}>
                <img src="./smart-farmer.png" alt="logo" />
              </Link>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="max-w-[487px] w-full flex flex-col"
              >
                <div className="flex relative">
                  <input
                    className="w-full rounded-lg bg-[#EFF1FB] py-3 px-4"
                    placeholder="Axtarış"
                    type="text"
                  />
                  <button type="submit" className="absolute top-2 right-4 p-1">
                    <img src="./search.svg" alt="search" />
                  </button>
                </div>
              </form>

              <ul className="flex gap-6 items-center">
                <li className="flex">
                  <Link to={"/"}>
                    <img className="p-2" src="./user.svg" alt="user" />
                  </Link>
                </li>
                <li className="flex">
                  <Link to={"/"}>
                    <img className="p-2" src="./hearth.svg" alt="hearth" />
                  </Link>
                </li>
                <li className="flex">
                  <Link to={"/"}>
                    <img className="p-2" src="./bag.svg" alt="bag" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-between">
              <button className="flex gap-2 items-center p-3 border border-[#0F7012] rounded-lg">
                <img src="./burger-btn.svg" alt="burger-btn" />
                Kategoriyalar
              </button>

              <ul className="text-[#1A1A1A] text-xl font-semibold flex gap-10">
                <li className="flex">
                  <Link to={""} className="flex items-center">
                    Hekayəmiz
                  </Link>
                </li>
                <li className="flex">
                  <Link to={""} className="flex items-center">
                    Məhsullar
                  </Link>
                </li>
                <li className="flex">
                  <Link to={""} className="flex items-center">
                    Fermerin əl kitabı
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
