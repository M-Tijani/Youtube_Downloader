import Navmobile from "../Navmobile";
import Navpc from "../Navpc";

function Header() {
  return (
    <>
      <main className="">
        <div className="flex flex-col md:hidden">
          <Navmobile />
        </div>
        <div className="hidden md:flex md:w-full">
          <Navpc />
        </div>
      </main>
    </>
  );
}

export default Header;
