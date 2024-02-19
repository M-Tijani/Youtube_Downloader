import { useState } from "react";
import { Link } from "react-router-dom";
function Loginrogister() {
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      <main className="box-holder max-w-[350px] py-8 w-full flex flex-col gap-3">
        <div className="w-full flex items-center justify-center gap-2">
          <button onClick={() => setTrigger(true)} className="login_input">
            LOGIN
          </button>
          <button onClick={() => setTrigger(false)} className="login_input">
            REGISTER
          </button>
        </div>

        <div className="w-full flex items-center justify-center">
          {trigger && (
            <form
              className="w-full max-w-[350px] flex flex-col gap-3"
              action=""
            >
              <div className="w-full max-w-[350px] flex flex-col gap-3">
                <input
                  className="input_style "
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="input_style max-w-[350px]"
                  type="password"
                  placeholder="Password"
                />
                <button className="login_input">LOGIN</button>
                <div>
                  <Link className="login_links" to="/forget-password">
                    Forget Password?
                  </Link>
                </div>
              </div>
            </form>
          )}
          {!trigger && (
            <form
              className="w-full max-w-[350px] flex flex-col gap-3"
              action=""
            >
              <div className="w-full max-w-[350px] flex flex-col gap-3">
                <input
                  className="input_style "
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="input_style "
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="input_style "
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="input_style "
                  type="password"
                  placeholder="Confirm Password"
                />
                <button className="login_input">REGISTER</button>
                <div className="flex items-center justify-between">
                  <Link className="login_links" to="/forget-password">
                    Forget Password?
                  </Link>
                  <button
                    className="login_links"
                    onClick={() => setTrigger(true)}
                  >
                    ?already have account
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
}

export default Loginrogister;
