function Forgetpass() {
  return (
    <>
      <main className="box-holder">
        <h1 className="text-2xl font-semibold">RESET PASSWORD</h1>
        <div className="w-full max-w-[350px] flex flex-col gap-3">
          <form className=" w-full max-w-[350px] flex flex-col gap-3" action="">
            <input className="input_style" type="text" placeholder="Email" />
            <button className="button_style">SEND</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Forgetpass;
