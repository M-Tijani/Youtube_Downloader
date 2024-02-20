import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Howtouse from "./Pages/Howtouse";
import Contact from "./Pages/Contact";
import Loginrogister from "./Pages/Loginrogister";
import Forgetpass from "./Pages/Forgetpass";
import Privacypolicy from "./Pages/Privacypolicy";
import Termsofuse from "./Pages/Termsofuse";
import Copyrights from "./Pages/Copyrights";
import Particles from "react-tsparticles";


function App() {
  return (
    <>
      <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#d8d8d8",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="how-to-use" element={<Howtouse />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Login-or-register" element={<Loginrogister />} />
            <Route path="forget-password" element={<Forgetpass />} />
            <Route path="Privacy-policy" element={<Privacypolicy />} />
            <Route path="Terms-of-use" element={<Termsofuse />} />
            <Route path="Copyrights" element={<Copyrights />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
