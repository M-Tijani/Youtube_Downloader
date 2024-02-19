import { motion } from "framer-motion";
import { tsParticles } from "@tsparticles/engine";
function Downloader() {
  return (
    <>
      <div className="flex flex-col items-center text-center justify-center my-10 font-bold">
        <h1 className="text-xl md:text-2xl lg:text-4xl">YouTube : Converter</h1>
        <h1 className="">
          The best free and fast YouTube converter in mp3, mp4 and other
          formats!
        </h1>
      </div>

      <main className="box-holder max-w-[350px] md:max-w-[600px] lg:max-w-[900px] py-10 duratidon-200 flex flex-col gap-3">
        <div className="flex flex-col md:flex md:flex-row gap-4">
          <input
            className="border-none outline-none placeholder:text-slate-700 w-[300px] lg:w-[500px] bg-300 py-2 px-4 rounded-lg ring-0 focus:ring-2 ring-100 duration-200"
            type="sreach"
            placeholder="Video Link"
          />
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 1.1 }}
            className="bg-100 text-white hover:bg-white shadow-md hover:text-100 py-2 px-4 rounded-lg  font-medium  duration-200"
          >
            DOWNLOAD
          </motion.button>
        </div>
        <div className="text-center text-sm font-semibold">
          <h1>Enter the URL of a YouTube video into the YouTube Converter</h1>
        </div>
        <div>
          <div className="bg-300 w-[300px] md:w-[450px] lg:w-[700px] flex items-center rounded-lg justify-center py-4 px-4">
            <div className="w-full">Hello</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Downloader;
