import { CiShoppingCart } from 'react-icons/ci';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5 md:px-20">
      <div className="navbar-start">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
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
        <div className="flex items-center gap-3">
          <CiShoppingCart />
          <p>Login</p>
        </div>
        <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
