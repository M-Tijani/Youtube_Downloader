// import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import Page1 from "/src/assets/Page1.png";
import Page2 from "/src/assets/Page2.png";
import Page3 from "/src/assets/Page3.png";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
export default function Howtouse() {
  return (
    <>
      <main>
        <div className="box-holder max-w-[350px] md:max-w-[600px] lg:max-w-[900px] py-10 duratidon-200 flex flex-col gap-3">
          <h1 className="text-white font-semibold text-2xl">HOW TO USE</h1>
          <span className="w-full h-1 rounded-md bg-600"></span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            <Gallery>
              <Item original={Page1} width="1000" height="1000">
                {({ ref, open }) => (
                  <img
                    className="border-4 border-600 rounded-lg "
                    ref={ref}
                    onClick={open}
                    src={Page1}
                  />
                )}
              </Item>
              <Item original={Page2} width="1000" height="1000">
                {({ ref, open }) => (
                  <img
                    className="border-4 border-600 rounded-lg "
                    ref={ref}
                    onClick={open}
                    src={Page2}
                  />
                )}
              </Item>
              <Item original={Page3} width="1000" height="1000">
                {({ ref, open }) => (
                  <img
                    className="border-4 border-600 rounded-lg "
                    ref={ref}
                    onClick={open}
                    src={Page3}
                  />
                )}
              </Item>
            </Gallery>
          </div>
        </div>
      </main>
    </>
  );
}
