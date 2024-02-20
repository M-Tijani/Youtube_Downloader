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

function App() {
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
