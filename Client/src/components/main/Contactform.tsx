function Contactform() {
  return (
    <>
      <main className="box-holder max-w-[350px] md:max-w-[600px] duration-200 flex flex-col gap-3">
        <form
          className=" w-full flex flex-col items-center justify-center gap-4"
          action=""
        >
          <div>
            <h1 className="text-2xl font-semibold">CONTACT US</h1>
          </div>
          <div className="w-full flex flex-col gap-3">
            <input
              className="input_style "
              type="text"
              placeholder="Last Name"
            />
            <input
              className="input_style "
              type="text"
              placeholder="First Name"
            />
            <input className="input_style" type="text" placeholder="Email" />
            <textarea
              className="border-none outline-none w-full h-[200px] placeholder:text-slate-700 bg-300 py-2 px-4 ring-0 focus:ring-2 rounded-lg ring-100 duration-200"
              placeholder="What in mind"
              name=""
              id=""
            ></textarea>
            <button className="login_input">SEND</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Contactform;
