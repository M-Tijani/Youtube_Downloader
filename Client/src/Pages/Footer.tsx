import Logo from "/src/assets/Tubeload White.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <main className="mt-auto bottom-0 right-0 left-0 bg-100">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start text-white gap-2 my-5 mx-5">
          <div className="flex flex-col gap-2 mx-10 text-justify">
            <Link className="text-2xl font-semibold" to="/">
              <img src={Logo} alt="" />
            </Link>
            <p>
              With Tubeload's YouTube converter, you can easily transform your
              favorite YouTube videos into high-quality mp3 or mp4 files.
              Whether you want to enjoy music on the go or save videos for
              offline viewing, Tubeload's converter has got you covered.
            </p>
          </div>

          <div className="flex flex-col gap-1 mx-10">
            <h1 className="text-xl font-semibold ">LINKS</h1>
            <Link className="login_links hover:text-50" to="Privacy-policy">
              Privacy policy
            </Link>
            <Link className="login_links hover:text-50" to="Terms-of-use">
              Terms of use
            </Link>
            <Link className="login_links hover:text-50" to="Copyrights">
              Copyrights
            </Link>
          </div>
        </div>
        <div className="bg-101 text-white font-semibold flex justify-center py-2 items-center">
          <h1>@COPYRIGHT 2024 CREATE BY TUBELOAD</h1>
        </div>
      </main>
    </>
  );
}

export default Footer;
