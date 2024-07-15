import { FC, ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}

const Footer: FC<FooterProps> = ({ ...props }) => {
  return (
    <footer {...props}>
      <div className="my-container">
        <div className="flex justify-between py-10">
          <div className="flex flex-col gap-3.5 w-96">
            <img src="./smart-farmer.png" alt="logo" className="w-32" />
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              accusamus perspiciatis nesciunt itaque tempora deleniti.
            </div>
            <div>
              <ul className="flex justify-between">
                <li>
                  <a href="tel:+994-55-9999999" className="font-semibold">
                    +994 55 9999999
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@smartfermer.az"
                    className="font-semibold"
                  >
                    info@smartfermer.az
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between gap-20">
            <div className="flex flex-col justify-between">
              <div className="font-bold">Ana səhifə</div>
              <ul className="flex flex-col gap-3 text-gray-500">
                <li>
                  <Link to={""}>Kateqoriyalar</Link>
                </li>
                <li>
                  <Link to={""}>Hekayəmiz</Link>
                </li>
                <li>
                  <Link to={""}>Məhsullar</Link>
                </li>
                <li>
                  <Link to={""}>Fermerin əl kitabı</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div className="font-bold">Dəstək</div>
              <ul className="flex flex-col gap-3 text-gray-500">
                <li>
                  <Link to={""}>Əlaqə</Link>
                </li>
                <li>
                  <Link to={""}>Suallar</Link>
                </li>
                <li>
                  <Link to={""}>Qaydalar & Şərt</Link>
                </li>
                <li>
                  <Link to={""}>Gizlilik Siyasəti</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div className="font-bold">Kateqoriyalar</div>
              <ul className="flex flex-col gap-3 text-gray-500">
                <li>
                  <Link to={""}>Meyvələr</Link>
                </li>
                <li>
                  <Link to={""}>Tərəvəzlər</Link>
                </li>
                <li>
                  <Link to={""}>Süd məhsulları</Link>
                </li>
                <li>
                  <Link to={""}>Ət & balıq</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="my-container">
          <div className="flex justify-between items-center py-8 text-gray-500">
            <div>Ecobazar eCommerce &#169; 2024. All Rights Reserved</div>
            <ul className="flex gap-2">
              <li>
                <img src="./visa.svg" alt="visa" />
              </li>
              <li>
                <img src="./mastercard.svg" alt="master-card" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
