import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { DropdownMenu } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import Logo from "/src/assets/Tubeload White.png";

function navbar_mobile() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-100 text-white">
      <div>
        <Link className="text-2xl font-semibold" to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              <RxHamburgerMenu size={30} color="white" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content sideOffset={30}>
            <div className="">
              <Link className="menu_button" to="/">
                HOME
              </Link>
            </div>
            <DropdownMenu.Separator />
            <div className="menu_button">
              <Link className="" to="/how-to-use">
                HOW TO USE
              </Link>
            </div>
            <DropdownMenu.Separator />
            <div className="menu_button">
              <Link to="/contact">CONTACT US</Link>
            </div>
            <DropdownMenu.Separator />
            <div>
              <Link className="menu_button" to="/Login-or-register">
                LOGIN / REGISTER
              </Link>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}

export default navbar_mobile;
