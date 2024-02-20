import Logo from "/src/assets/Tubeload White.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <main className="mt-auto bottom-0 right-0 left-0 bg-100">
        <div className="grid grid-col-1 justify-items-center text-justify gap-2 px-4 py-4 bg-100 text-white">
          <Link className="text-2xl font-semibold" to="/">
            <img src={Logo} alt="" />
          </Link>
          <p>
            With Tubeload's YouTube converter, you can easily transform your
            favorite YouTube videos into high-quality mp3 or mp4 files. Whether
            you want to enjoy music on the go or save videos for offline
            viewing, Tubeload's converter has got you covered.
          </p>
        </div>
      </main>
    </>
  );
}

export default Footer;
