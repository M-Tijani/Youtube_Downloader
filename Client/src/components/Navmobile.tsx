import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { DropdownMenu } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import Logo from "/src/assets/Tubeload White.png";
import Cookies from "js-cookie";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  googleLogout,
} from "@react-oauth/google";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function navbar_mobile() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    profileImage: "",
  });

  useEffect(() => {
    const user = Cookies.get("credentialtxt");
    if (user !== undefined) {
      setLoggedIn(true);
      getcardprofil(user);
    } else setLoggedIn(false);
  }, [""]);

  const getcardprofil = (credentialtxt: string) => {
    const decoded: any = jwtDecode(credentialtxt);
    if (decoded) {
      const userName = decoded?.name || "Unknown";
      const userEmail = decoded?.email || "Unknown";
      const userProfileImage = decoded?.picture || "";

      setUserInfo({
        name: userName,
        email: userEmail,
        profileImage: userProfileImage,
      });
      setLoggedIn(true);
      Cookies.set("credentialtxt", credentialtxt);
    }
  };

  const GoogleLoginSuccess = (credentialResponse: any) => {
    const token = credentialResponse?.credential;
    getcardprofil(token);
    // setCookie("credentialtxt", token);
  };
  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 bg-501 text-white">
        <div>
          <Link className="text-2xl font-semibold" to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                <RxHamburgerMenu size={30} color="white" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content sideOffset={30}>
              <div className="">
                <Link className="menu_button py-2 px-6" to="/">
                  HOME
                </Link>
              </div>
              <DropdownMenu.Separator />
              <div className="menu_button py-2 px-6">
                <Link to="/contact">CONTACT US</Link>
              </div>
              <DropdownMenu.Separator />
              <div className="flex items-center justify-center">
                <GoogleOAuthProvider clientId="347025856432-g5s8g8750kdm1klmfhdeqt4hpi8tun23.apps.googleusercontent.com">
                  {loggedIn ? (
                    <>
                      <div>
                        <DropdownMenu.Root>
                          <DropdownMenu.Trigger>
                            <img
                              className="flex rounded-full w-[38px] cursor-pointer"
                              src={userInfo.profileImage}
                              alt=""
                            />
                          </DropdownMenu.Trigger>
                          <DropdownMenu.Content sideOffset={30}>
                            <div className="flex flex-col my-2 items-center">
                              <h1 className="text-xl font-semibold">
                                {userInfo.name}
                              </h1>
                            </div>
                            <div className="button_style py-2">
                              <NavLink to="/History">
                                <div className="history">History</div>
                              </NavLink>
                            </div>
                            <DropdownMenu.Separator />
                            <div>
                              <div
                                className="button_style py-2 cursor-pointer logout"
                                onClick={() => {
                                  googleLogout();
                                  Cookies.remove("credentialtxt");
                                  setLoggedIn(false);
                                }}
                              >
                                Log out
                              </div>
                            </div>
                          </DropdownMenu.Content>
                        </DropdownMenu.Root>
                      </div>
                    </>
                  ) : (
                    <GoogleLogin
                      onSuccess={GoogleLoginSuccess}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  )}
                </GoogleOAuthProvider>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </header>
    </>
  );
}

export default navbar_mobile;
