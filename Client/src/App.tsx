import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Howtouse from "./Pages/Howtouse";
import Contact from "./Pages/Contact";
import Loginrogister from "./Pages/Loginrogister";
import Forgetpass from "./Pages/Forgetpass";
// import { tsParticles } from "@tsparticles/engine";

function App() {
  // tsParticles.load({
  //   id: "tsparticles",
  //   options: [
  //     {
  //       preset: "fireworks",
  //     },
  //     {
  //       /* other options here */
  //     },
  //   ],
  // });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="how-to-use" element={<Howtouse />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Login-or-register" element={<Loginrogister />} />
            <Route path="forget-password" element={<Forgetpass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
