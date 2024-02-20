import { Link } from "react-router-dom";

function Copyrights() {
  return (
    <>
      <main className="box-holder max-w-[350px] md:max-w-[600px] duration-200 flex flex-col gap-3">
        <div className="text-box">
          <h1>Copyright Policy</h1>
        </div>
        <div>
          <p className="text-p">
            We are against media owners and distributors limiting other people's
            access to publicly available instances of their work, but if you do
            insist on doing, we will comply and stop our users from accessing
            your online videos and audios. Simply write to this email{" "}
            <span className="login_links font-bold md:text-lg">
              <Link to="/contact">ytconverteur@gmail.com</Link>
            </span>{" "}
            and include signed copies of all documents proving your original
            ownership of the media or documents granting you the usage rights or
            your request will not be considered legitimate.
          </p>
        </div>
      </main>
    </>
  );
}

export default Copyrights;
