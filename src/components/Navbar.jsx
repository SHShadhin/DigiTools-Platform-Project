import { use } from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const NavBar = ({ carts }) => {
  return (
    <div className="navbar sticky top-0 z-60 bg-base-100 shadow-sm px-5 md:px-20">
      <div className="navbar-start">
        <h2 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </h2>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="flex items-center text-gray-700 gap-3">
          <div className="relative">
            <CiShoppingCart size={30} />
            {carts.length > 0 && (
              <div className="h-5 w-5 rounded-full bg-red-400 flex justify-center items-center absolute -top-2 -right-2 text-white">
                <span className="font-semibold ">{carts.length}</span>
              </div>
            )}
          </div>
          <ul>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
