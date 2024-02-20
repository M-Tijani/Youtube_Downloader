import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function Loginrogister() {
  const [trigger, setTrigger] = useState(false);
  const [name_register, setname_register] = useState("");
  const [email_register, setemail_register] = useState("");
  const [password_register, setpassword_register] = useState("");
  const [passwordconfirmation_register, setpasswordconfirmation_register] =
    useState("");
  const [errormsg, seterrormsg] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle1 = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const handleToggle2 = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const handleToggle3 = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const handlePassword = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;

    const ulstrenthli = document.querySelector(".liverifypas") as HTMLElement;
    if (ulstrenthli) {
      if (newPassword === "") {
        ulstrenthli.style.display = "none";
      } else {
        ulstrenthli.style.display = "grid";
      }
    }

    setpassword_register(newPassword);

    // Perform password strength checks
    const hasNumber = /\d/.test(newPassword);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword);
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasUppercase = /[A-Z]/.test(newPassword);

    // Update the UI to indicate password strength
    if (ulstrenthli) {
      const passwordStrengthMessages = ulstrenthli.querySelectorAll("li");

      passwordStrengthMessages[0].classList.toggle(
        "verifypas-checked",
        hasNumber
      );
      passwordStrengthMessages[1].classList.toggle(
        "verifypas-checked",
        hasSymbol
      );
      passwordStrengthMessages[2].classList.toggle(
        "verifypas-checked",
        hasLowercase
      );
      passwordStrengthMessages[3].classList.toggle(
        "verifypas-checked",
        hasUppercase
      );
    }
  };

  useEffect(() => {
    // Function to check if all list items have the 'verifypas-checked' class
    const areAllChecked = () => {
      const passwordStrengthMessages =
        document.querySelectorAll(".liverifypas li");
      return Array.from(passwordStrengthMessages).every((li) =>
        li.classList.contains("verifypas-checked")
      );
    };

    // Check if all criteria are met and update isPasswordValid state
    setIsPasswordValid(areAllChecked());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password_register]);

  const register = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (passwordconfirmation_register === password_register) {
      seterrormsg("");
    } else {
      seterrormsg("Password Not match");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nm: name_register,
        eml: email_register,
        ps: password_register,
      }),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/register",
        requestOptions
      );
      const data = await response.json();

      if (response.ok) {
        if (data.newregister) {
          toast.success("registration successful", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
          });
          seterrormsg("");
        } else {
          toast.error("Email Exists, Try with other email", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (error) {
      console.error("Error:" + error);
    }
  };

  return (
    <>
      <main className="box-holder duration-200 max-w-[350px] md:max-w-[500px] py-8 w-full flex flex-col gap-3">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setTrigger(true)}
            className="login_input md:px-[55px]"
          >
            LOGIN
          </button>
          <button
            onClick={() => setTrigger(false)}
            className="login_input md:px-[55px]"
          >
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
                  type="email"
                  placeholder="Email"
                  required
                />
                <div className="relative w-full max-w-[350px] flex flex-col gap-3">
                  <input
                    className="input_style"
                    type={type}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <span
                    className="flex justify-around items-center"
                    onClick={handleToggle1}
                  >
                    <Icon
                      className="absolute top-[7px] right-[15px]"
                      icon={icon}
                      size={20}
                    />
                  </span>
                </div>
                <button type="submit" className="login_input">
                  LOGIN
                </button>
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
              onSubmit={register}
              className="w-full max-w-[350px] flex flex-col gap-3"
            >
              <div className="w-full max-w-[350px] flex flex-col gap-3">
                <input
                  className="input_style "
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setname_register(e.target.value);
                  }}
                  required
                />
                <input
                  className="input_style "
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setemail_register(e.target.value);
                  }}
                  required
                />
                <div className="relative w-full max-w-[350px] flex flex-col gap-3">
                  <input
                    className="input_style "
                    type={type}
                    name="password"
                    placeholder="Password"
                    value={password}
                    autoComplete="current-password"
                    onChange={handlePassword}
                    required
                  />
                  <span
                    className="flex justify-around items-center"
                    onClick={handleToggle2}
                  >
                    <Icon
                      className="absolute top-[7px] right-[15px]"
                      icon={icon}
                      size={20}
                    />
                  </span>
                </div>

                <>
                  <ul className="liverifypas grid grid-cols-1 gap-1 text-sm ml-2 duration-200">
                    <li className="verifypas1">Should contain numbers.</li>
                    <li className="verifypas2">
                      Should contain symbol characters.
                    </li>
                    <li className="verifypas3">Should contain lowercase.</li>
                    <li className="verifypas3">Should contain uppercase.</li>
                  </ul>
                </>
                <div className="relative w-full max-w-[350px] flex flex-col gap-3">
                  <input
                    className="input_style "
                    type={type}
                    name="password"
                    placeholder="Confirm Password"
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => {
                      setpasswordconfirmation_register(e.target.value);
                    }}
                    required
                  />
                  <span
                    className="flex justify-around items-center"
                    onClick={handleToggle3}
                  >
                    <Icon
                      className="absolute top-[7px] right-[15px]"
                      icon={icon}
                      size={20}
                    />
                  </span>
                </div>

                {errormsg && (
                  <p style={{ color: "red", fontSize: "12px" }}>{errormsg}</p>
                )}
                <button
                  disabled={!isPasswordValid}
                  className="login_input cursor-pointer"
                >
                  REGISTER
                </button>

                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />

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