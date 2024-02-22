import Logo from "/src/assets/Tubeload White.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <main className="mt-auto bottom-0 right-0 left-0 bg-501">
        <div className="flex flex-col items-start justify-start text-white gap-2 my-4 mx-10 / md:flex-row md:items-center md:justify-center md:gap-4 md:my-8 md:mx-16">
          <div className="flex flex-col gap-2 ">
            <Link className="text-2xl font-semibold " to="/">
              <img src={Logo} alt="" />
            </Link>
            <p className="md:text-sm md:max-w-[400px]">
              With Tubeload's YouTube converter, you can easily transform your
              favorite YouTube videos into high-quality mp3 or mp4 files.
              Whether you want to enjoy music on the go or save videos for
              offline viewing, Tubeload's converter has got you covered.
            </p>
          </div>

          <div className="flex flex-col gap-1 ">
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
        <div className="bg-502 text-white font-semibold flex justify-center py-2 items-center">
          <h1>@COPYRIGHT 2024 CREATE BY TUBELOAD</h1>
        </div>
      </main>
    </>
  );
}

export default Footer;
