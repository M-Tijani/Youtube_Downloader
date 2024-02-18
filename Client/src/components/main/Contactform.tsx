function Contactform() {
  return (
    <>
      <main className="box-holder">
        <form className="flex flex-col gap-4" action="">
          <div className="flex gap-4">
            <input
              className="input_style"
              type="text"
              placeholder="First Name"
            />
            <input
              className="input_style"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <input className="input_style" type="text" placeholder="Email" />
            <textarea
              className="border-none outline-none w-full bg-300 py-2 px-4 ring-0 focus:ring-2 rounded-lg ring-100 duration-200"
              placeholder="What in mind"
              name=""
              id=""
            ></textarea>
            <button
              className="button_style rounded-full
            "
            >
              SEND
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Contactform;
