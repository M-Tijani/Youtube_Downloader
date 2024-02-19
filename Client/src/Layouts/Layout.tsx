import Header from "../components/main/Header";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";

function Layout() {
  return (
    <Theme>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Theme>
  );
}

export default Layout;
