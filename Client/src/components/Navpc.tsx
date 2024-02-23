import { NavLink, Link } from "react-router-dom";
import Logo from "/src/assets/Tubeload White.png";
import { GoogleLogin, GoogleOAuthProvider, GoogleLogout } from '@react-oauth/google';

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import "../Css/Navpc.css"
import { IoIosArrowDown } from "react-icons/io";
import { useCookies } from 'react-cookie';

function Navpc() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', profileImage: '' });

  useEffect(()=>{

  });
  const getcardprofil = (credentialtxt)=>{
    const decoded = jwtDecode(credentialtxt);
    if (decoded) {
      const userName = decoded?.name || 'Unknown';
      const userEmail = decoded?.email || 'Unknown';
      const userProfileImage = decoded?.picture || '';

      setUserInfo({ name: userName, email: userEmail, profileImage: userProfileImage });
      setLoggedIn(true);
    }
    
  }
  const GoogleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse?.credential;
    getcardprofil(token);
    setCookie("credentialtxt",token);

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
            
            <GoogleOAuthProvider
              clientId="347025856432-g5s8g8750kdm1klmfhdeqt4hpi8tun23.apps.googleusercontent.com"
              cookiePolicy={'single_host_origin'}
            >
              {loggedIn ? (
                <>

                  <div className="cardprofil">
                    <img className="profilimg" src={userInfo.profileImage} alt="User Profile" />
                    <div className="detailsinfo">
                      <h2>{userInfo.name}</h2>
                      <p>{userInfo.email}</p>
                    </div>
                    <IoIosArrowDown style={{ fontSize: '22px', color: '#f8f8f8' ,marginRight:"5px"}}/>

                  </div>
                </>

              ) : (
                <GoogleLogin
                  onSuccess={GoogleLoginSuccess}
                  onError={() => {
                    console.log('Login Failed');
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
