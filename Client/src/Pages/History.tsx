//@ts-nocheck
import axios from "axios";
import Image from "/src/assets/image.jpg";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ReactDOM from "react-dom";

function History() {
  const [history, sethistory] = useState([]);

  useEffect(() => {
    axios
      .get("https://youtube-downloader-l5n5.onrender.com/gethistory", {
        params: {
          email: Cookies.get("emailuser"),
        },
      })
      .then((response) => {
        console.log(response.data);
        sethistory(response.data.history);
      });
  }, []);

  return (
    <>
      <main className="box-holder  max-w-[350px] md:max-w-[600px] lg:max-w-[900px] py-10 duratidon-200 flex flex-col gap-3">
        <div className="w-full flex flex-col items-center justify-center gap-2 my-8">
          <div>
            <div className="text-white text-2xl font-semibold">
              <h1>HISTORY</h1>
            </div>
          </div>
          <span className="w-full h-1 rounded-md bg-600"></span>
        </div>
        {history.length === 0 ? (
          <>
            <h1 style={{ fontSize: "50px", color: "white" }}>No found</h1>
          </>
        ) : (
          history.map((item, i) => (
            <Link target="new" to={item.url} key={i}>
              <div className="flex items-center justify-center gap-2">
                <div className="flex flex-row justify-center  text-white gap-3">
                  <img
                    className="w-[120px] md:w-[150px]"
                    src={item.img}
                    alt=""
                  />
                  <div className="flex-col gap-1 inline-block w-[250px] md:w-[350px] lg:w-[500px]">
                    <h1 className="text-sm font-medium line-clamp-2 md:text-base md:line-clamp-3">
                      {item.videoname}
                    </h1>

                    <h1>MP4</h1>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </main>
    </>
  );
}

export default History;
