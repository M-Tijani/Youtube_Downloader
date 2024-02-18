import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Downloader() {
  const [videoLink, setVideoLink] = useState<any>([]);
  const [videoImage, setVideoImage] = useState<any>([]);
  // API function to get the video link
  const url = "https://youtube86.p.rapidapi.com/api/youtube/links";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Forwarded-For": "70.41.3.18",
      "X-RapidAPI-Key": "f23eeeabd0msh4fe03d9e1b6cf85p1b298bjsnd62f8b80011e",
      "X-RapidAPI-Host": "youtube86.p.rapidapi.com",
    },
    body: JSON.stringify({
      url: "https://www.youtube.com/watch?v=KBpoBc98BwM",
    }),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // setVideoLink(result[0].urls);
        setVideoImage(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <main className="box-holder">
        <div className="flex gap-4">
          <input
            className="border-none outline-none w-[300px] bg-300 py-2 px-4 rounded-full ring-0 focus:ring-2 ring-100 duration-200"
            type="sreach"
            placeholder="Paste you video link"
          />
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 1.1 }}
            className="bg-100 text-white hover:bg-white shadow-md hover:text-100 py-2 px-4 rounded-full  font-medium  duration-200"
          >
            DOWNLOAD
          </motion.button>
        </div>
        <div>
          <div className="bg-300 w-[442px] flex items-center justify-center py-4 px-4">
            <div className="w-full">
              <img
                className="w-[200px] h-autosize"
                src={videoImage[0]?.pictureUrl}
                alt=""
              />
            </div>
            {/* <div>{videoLink}</div> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default Downloader;
