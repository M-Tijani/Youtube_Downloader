import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Tubeload White.png";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  googleLogout,
} from "@react-oauth/google";

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import "../Css/Navpc.css";
import Cookies from "js-cookie";
import { DropdownMenu } from "@radix-ui/themes";
import axios from "axios";

function Navpc() {
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
      getcardprofil(user ,false);
    } else setLoggedIn(false);
  }, [""]);

  const getcardprofil = (credentialtxt: string , check :boolean) => {
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
      Cookies.set("emailuser", userEmail);

      if(check){
        axios.get("https://youtube-downloader-l5n5.onrender.com/adduser",{
          params:{
            credential :credentialtxt ,
            email :userEmail
          }
        })
      }
    }
  };

  const GoogleLoginSuccess = (credentialResponse: any) => {
    const token = credentialResponse?.credential;
    getcardprofil(token , true);
  };

  return (
    <>
      <main className="w-full">
        <div className="w-full flex py-4 px-10 items-center justify-around bg-501">
          <div>
            <NavLink className="text-2xl text-white font-semibold" to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>
          <div className="text-white font-medium flex gap-8">
            <NavLink
              className="text-white text_style aria-[current=page]:text-600"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="text-white text_style aria-[current=page]:text-600"
              to="/contact"
            >
              CONTACT US
            </NavLink>
          </div>
          <div className="">
            <GoogleOAuthProvider clientId="347025856432-g5s8g8750kdm1klmfhdeqt4hpi8tun23.apps.googleusercontent.com">
              {loggedIn ? (
                <>
                  <div>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger>
                        <img
                          className="flex rounded-full w-[50px] cursor-pointer"
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
                            <div>History</div>
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
        </div>
      </main>
    </>
  );
}

export default Navpc;
