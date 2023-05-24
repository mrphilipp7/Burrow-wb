import Logo from "../Assets/Logo";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="sticky top-0 ">
      <header className="flex justify-center items-center md:justify-between md:px-6">
        <div className="flex items-center">
          <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 flex justify-center items-center">
            <Logo />
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl tracking-wide font-Ubuntu">
            BurrowTech
          </p>
        </div>
        <nav className="hidden md:flex space-x-12 md:justify-center md:items-center tracking-wide">
          <Link
            to="/"
            className="text-2xl p-2 px-6 rounded-lg hover:bg-dark-orange/30 active:bg-dark-orange/50"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-2xl p-2 px-6 rounded-lg hover:bg-dark-orange/30 active:bg-dark-orange/50"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-2xl p-2 px-6 rounded-lg hover:bg-dark-orange/30 active:bg-dark-orange/50"
          >
            Contact
          </Link>
          <Link
            to="/pricing"
            className="text-2xl p-2 px-6 rounded-lg bg-dark-orange shadow-sm shadow-dark hover:bg-dark-orange/80 active:bg-dark-orange active:shadow-dark/80"
          >
            Pricing
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
