import Header from "../components/main/Header";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Theme>
      <Header />
      <main>
        <Outlet />
      </main>
    </Theme>
  );
}

export default Layout;
