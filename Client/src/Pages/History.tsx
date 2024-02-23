import Image from "/src/assets/image.jpg";

function History() {
  return (
    <>
      <main className="box-holder max-w-[350px] md:max-w-[600px] lg:max-w-[900px] py-10 duratidon-200 flex flex-col gap-3">
        <div className="w-full flex flex-col items-center justify-center gap-2 my-8">
          <div>
            <div className="text-white text-2xl font-semibold">
              <h1>HISTORY</h1>
            </div>
          </div>
          <span className="w-full h-1 rounded-md bg-600"></span>
        </div>
        <div className="flex items-start justify-between gap-4 text-white">
          <img
            className="w-[120px] md:w-[150px] border-[4px] rounded-lg border-600"
            src={Image}
            alt=""
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-sm md:text-lg">
              03- React Hooks - useRef [ARABIC]
            </h1>
            <h1>MP4</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default History;
