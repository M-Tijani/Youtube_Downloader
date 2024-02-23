import { motion } from "framer-motion";
import { SetStateAction, useEffect, useState } from "react";
import $ from "jquery"; // You might need to install jQuery if not already installed
import { Icon } from "@iconify/react";
import BarLoader from "react-spinners/BarLoader";
import "flowbite";
import { useTypewriter } from "react-simple-typewriter";
import { Flex, Select } from "@radix-ui/themes";
import Howtouse from "../Howtouse";

function Downloader() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState({ is: false, key: null });
  const [searchData, setSearchData] = useState({});
  const [response, setResponse] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  // Type Righter //
  const [typeEffect] = useTypewriter({
    words: ["YOUTUBE :", "FACEBOOK :"],
    loop: true,
    typeSpeed: 200,
    delaySpeed: 1000,
  });
  useEffect(() => {}, []);
  const k_url_search =
    "https://corsproxy.io/?" +
    encodeURIComponent("https://yt5s.io/api/ajaxSearch");

  const ksearchvideo = () => {
    if (!searchInput) return;

    $.ajax({
      type: "POST",
      url: k_url_search,
      data: {
        q: searchInput,
        vt: "home", // Ensure k_page is defined
      },
      beforeSend: function () {
        // Your loading logic here
        setSearchLoading(true);
      },
      success: function (data: SetStateAction<{}>, textStatus: any, xhr: any) {
        setSearchLoading(false);
        setSearchData(data);
      },
      error: function (xhr: any) {},
    });
  };

  console.log(searchData);

  const apiUrl =
    "https://corsproxy.io/?" +
    encodeURIComponent("https://dt230.dlsnap01.xyz/api/json/convert");

  const makeAjaxPostRequest = (q: any) => {
    const payload = {
      v_id: searchData?.vid,
      ftype: "mp4",
      fquality: q,
      fname: searchData?.fn,
      token: searchData?.token,
      timeExpire: searchData?.timeExpires,
    };

    $.ajax({
      type: "POST",
      url: apiUrl,
      data: payload,
      beforeSend: function () {
        // Add any loading logic here
        setLoading({ is: true, key: q });
      },
      success: function (response: any) {
        // Handle the response data here
        setLoading({ is: false, key: q });
        setResponse(response);

        // Check if the response status is "converting" and replay the request
        if (response.result === "Converting") {
          setLoading({ is: true, key: q });

          setTimeout(() => {
            if (searchData?.vid) {
              makeAjaxPostRequest(q);
            }
          }, 1000);
        }
      },
      error: function (error: any) {
        // Handle any errors here
        console.error("Error:", error);
      },
    });
  };

  return (
    <>
      <div className="flex flex-col items-center text-center justify-center text-white my-10 font-bold">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">
          <span className="text-600">{typeEffect}</span> Converter
        </h1>
        <h1 className="">
          The best free and fast YouTube converter in mp3, mp4 and other
          formats!
        </h1>
      </div>

      <main className="box-holder max-w-[350px] md:max-w-[600px] lg:max-w-[900px] py-10 duratidon-200 flex flex-col gap-3">
        <div className="text-center text-sm font-semibold text-white">
          <h1>Enter the URL of a YouTube video into the YouTube Converter</h1>
        </div>
        <div className="flex flex-col md:flex md:flex-row gap-4">
          <div className="relative">
            <input
              className="input_style  placeholder:text-slate-700 w-[300px] lg:w-[500px]"
              type="sreach"
              placeholder="Video Link"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="absolute top-[5px] right-[7px]">
              <Flex gap="3">
                <Select.Root defaultValue="mp4">
                  <Select.Trigger radius="large" />
                  <Select.Content color="red">
                    <Select.Group color="red">
                      <Select.Item value="mp3">MP3</Select.Item>
                      <Select.Item value="mp4">MP4</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Flex>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 1.1 }}
            className="dif_btn_style"
            onClick={ksearchvideo}
          >
            GET LINK
          </motion.button>
        </div>

        <div>
          <div className="bg-700 w-[300px] md:w-[450px] lg:w-[700px] rounded-lg justify-center py-4 px-4 text-white">
            {searchLoading ? (
              <div className="flex w-full cursor-pointer justify-center py-20">
                <BarLoader
                  color="#e02226"
                  height={5}
                  loading
                  speedMultiplier={1}
                  width={208}
                />
              </div>
            ) : (
              searchData?.p == "convert" && (
                <>
                  <div className="text-center">
                    <h1 className="text-2xl p-2">MP4</h1>

                    <div className="md:flex md:flex-wrap grid grid-cols-2 justify-center gap-4 p-2">
                      {searchData?.links &&
                        Object.entries(searchData?.links?.mp4)?.map((l, i) => (
                          <div
                            className="bg-600 flex rounded-lg py-1 px-2 gap-2 cursor-pointer"
                            key={i}
                            onClick={() => makeAjaxPostRequest(l[1]?.k)}
                          >
                            <div>
                              <p>{l[1]?.k}</p>
                              <small className="">{l[1]?.size}</small>
                            </div>
                            {loading?.is && loading?.key == l[1]?.k ? (
                              <button className="loading">
                                <svg
                                  className="svg-icon"
                                  fill="none"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    stroke="#ffffff"
                                    stroke-linecap="round"
                                    stroke-width="1.5"
                                  >
                                    <path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path>
                                    <path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path>
                                  </g>
                                </svg>
                              </button>
                            ) : !loading?.is && loading?.key == l[1]?.k ? (
                              <a
                                className="Btn tool  relative"
                                aria-label="Download"
                                href={response?.result}
                              >
                                <svg
                                  className="svgIcon"
                                  viewBox="0 0 384 512"
                                  height="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                </svg>
                                <span className="icon2"></span>
                                {/* <span className="tooltip">Download</span> */}
                              </a>
                            ) : (
                              <span
                                aria-label="Get link"
                                className="relative tool"
                              >
                                <Icon icon="gg:link" width={20} />
                              </span>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mx-auto">
                      <h1 className="p-1 text-center">{searchData?.title}</h1>

                      <img
                        src={`https://i.ytimg.com/vi/${searchData?.vid}/0.jpg`}
                        className="h-[218px]  rounded-md  mx-auto object-fill"
                      />
                      <div className="">
                        <span>{searchData?.duration}</span>
                        {/* <a className="Btn" href={response?.result}>
                  <svg
                    className="svgIcon"
                    viewBox="0 0 384 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                  </svg>
                  <span className="icon2"></span>
                  <span className="tooltip">Download</span>
                </a> */}
                      </div>
                    </div>
                  </div>
                </>
              )
            )}

            {searchData?.p == "facebook" && (
              <div>
                <div className="p-6">
                  <div className="mx-auto">
                    <h1 className="p-1 text-center">{searchData?.title}</h1>

                    <img
                      src={searchData?.thumbnail}
                      className="h-[218px]  rounded-md  mx-auto object-fill"
                    />
                    <div className="flex items-center justify-between p-1">
                      <span className="text-center mx-auto text-zinc-400">
                        {searchData?.duration}
                      </span>
                      {/* <a className="Btn" href={response?.result}>
                  <svg
                    className="svgIcon"
                    viewBox="0 0 384 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                  </svg>
                  <span className="icon2"></span>
                  <span className="tooltip">Download</span>
                </a> */}
                    </div>
                  </div>
                  <div className="md:flex md:flex-wrap grid grid-cols-2 justify-center gap-4 p-2">
                    <div className=" flex items-center justify-between lg:w-[160px] bg-fuchsia-700 hover:bg-fuchsia-600 cursor-pointer py-1 px-3">
                      <div>
                        {/* <p>{searchData?.links?.hd}</p> */}
                        <p className="text-zinc-100">MP4 HD</p>
                      </div>

                      <a
                        className="Btn tool relative"
                        aria-label="Download"
                        href={searchData?.links?.hd}
                      >
                        <svg
                          className="svgIcon"
                          viewBox="0 0 384 512"
                          height="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                        <span className="icon2"></span>
                        {/* <span className="tooltip">Download</span> */}
                      </a>
                    </div>

                    <div className=" flex items-center justify-between lg:w-[160px] bg-fuchsia-700 hover:bg-fuchsia-600 cursor-pointer py-1 px-3">
                      <div>
                        {/* <p>{searchData?.links?.hd}</p> */}
                        <p className="text-zinc-100">MP4 SD</p>
                      </div>

                      <a
                        className="Btn tool relative"
                        aria-label="Download"
                        href={searchData?.links?.sd}
                      >
                        <svg
                          className="svgIcon"
                          viewBox="0 0 384 512"
                          height="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                        <span className="icon2"></span>
                        {/* <span className="tooltip">Download</span> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Howtouse />
    </>
  );
}

export default Downloader;
