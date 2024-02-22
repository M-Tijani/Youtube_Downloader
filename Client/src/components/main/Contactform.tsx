import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contactform() {
  const [emty1, setEmty1] = useState("");
  const [emty2, setEmty2] = useState("");
  const [emty3, setEmty3] = useState("");
  const [emty4, setEmty4] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_geq9t98", "template_vijch62", form.current, {
          publicKey: "Z8zaVcgAmVoJVeaIo",
        })
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };
  return (
    <>
      <main className="box-holder max-w-[350px] md:max-w-[600px] duration-200 flex flex-col gap-3">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" w-full flex flex-col items-center justify-center my-4 gap-4"
          action=""
        >
          <div>
            <h1 className="text-2xl font-semibold">CONTACT US</h1>
          </div>
          <div className="w-full flex flex-col gap-3">
            <input
              name="name"
              id="name"
              className="input_style "
              type="text"
              value={emty2}
              onChange={(e) => setEmty2(e.target.value)}
              placeholder="First Name"
            />
            <input
              name="name"
              className="input_style "
              type="text"
              value={emty1}
              onChange={(e) => setEmty1(e.target.value)}
              placeholder="Last Name"
            />
            <input
              name="email"
              value={emty3}
              onChange={(e) => setEmty3(e.target.value)}
              className="input_style"
              type="email"
              placeholder="Email"
            />
            <textarea
              value={emty4}
              onChange={(e) => setEmty4(e.target.value)}
              className="border-none outline-none w-full h-[200px] placeholder:text-slate-700 bg-300 py-2 px-4 ring-0 focus:ring-2 rounded-lg ring-100 duration-200"
              placeholder="What in mind"
              name="message"
              id=""
            ></textarea>
            <button type="submit" value="Send" className="login_input">
              SEND
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Contactform;
