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
          <div className="flex flex-col justify-between">
            <div className="font-bold">My Account</div>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li>
                <Link to={""}>My Account</Link>
              </li>
              <li>
                <Link to={""}>Order History</Link>
              </li>
              <li>
                <Link to={""}>Shopping Cart</Link>
              </li>
              <li>
                <Link to={""}>Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div className="font-bold">Helps</div>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li>
                <Link to={""}>Contact</Link>
              </li>
              <li>
                <Link to={""}>Faqs</Link>
              </li>
              <li>
                <Link to={""}>Terms & Condition</Link>
              </li>
              <li>
                <Link to={""}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div className="font-bold">Proxy</div>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li>
                <Link to={""}>About</Link>
              </li>
              <li>
                <Link to={""}>Shop</Link>
              </li>
              <li>
                <Link to={""}>Product</Link>
              </li>
              <li>
                <Link to={""}>Track Order</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div className="font-bold">Categories</div>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li>
                <Link to={""}>Fruit & Vegetables</Link>
              </li>
              <li>
                <Link to={""}>Meat & Fish</Link>
              </li>
              <li>
                <Link to={""}>Bread & Bakery</Link>
              </li>
              <li>
                <Link to={""}>Beauty & Health</Link>
              </li>
            </ul>
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
