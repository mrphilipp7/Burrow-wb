import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen">
      <section className=" md:w-1/3 m-auto fixed left-1 md:left-4 lg:left-24 top-36 lg:top-56">
        <p className="text-4xl lg:text-6xl tracking-wide font-Ubuntu">
          The Simple Way to Manage your Product.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-dark pt-2 pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          nisl purus in mollis nunc sed id semper. Ut sem viverra aliquet eget
          sit amet.
        </p>
        <Link
          to="/pricing"
          className="text-2xl py-4 px-6 rounded-lg bg-dark-orange shadow-sm shadow-dark hover:bg-dark-orange/80 active:bg-dark-orange active:shadow-dark/80"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
