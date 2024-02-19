import { NavLink, Link } from "react-router-dom";
import Logo from "/src/assets/Tubeload White.png";
function Navpc() {
  return (
    <>
      <main className="w-full">
        <div className="w-full flex py-4 px-10 items-center justify-around bg-100">
          <div>
            <NavLink className="text-2xl text-white font-semibold" to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>
          <div className="text-white font-medium flex gap-8">
            <NavLink
              className="text-white text_style aria-[current=page]:text-blue-400"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="text-white text_style aria-[current=page]:text-blue-400"
              to="/how-to-use"
            >
              HOW TO USE
            </NavLink>
            <NavLink
              className="text-white text_style aria-[current=page]:text-blue-400"
              to="/contact"
            >
              CONTACT US
            </NavLink>
          </div>
          <div className="flex gap-4">
            <Link className="button_style" to="/Login-or-register">
              LOGIN / REGISTER
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Navpc;
