import { FaSearchLocation, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <h1 className="text-4xl font-bold">"Your Logo"</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="/" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="/" className="hover:text-darkGrayishBlue">
              Discover
            </a>
            <a href="/" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="/" className="hover:text-darkGrayishBlue">
              Branches
            </a>
          </div>
          <div
            className=" hidden md:flex"
          >
            <a href="/"><FaShoppingCart className="mx-3"/></a>
            <a href="/"><FaUserAlt className="mx-3"/></a>
            <a href="/"><FaSearchLocation className="mx-3"/></a>
          </div>
          </div>
          </nav>
    </div>
  );
};

export default Navbar;
