import logo from "../assets/logo.png";
import menu_ic from "../assets/icons/menu-outline.svg";
import close_ic from "../assets/icons/close-outline.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-10 bg-white/25 flex justify-between items-center backdrop-blur-lg w-full h-14 px-6">
        <div className="flex gap-2 h-full items-center">
          <img src={logo} alt="Velocity logo" className="h-full" />
          <h4 className="tracking-tight font-medium text-lg">Velocity</h4>
        </div>

        <nav className="hidden sm:flex gap-4">
          <NavItem title="Acasă" url="/" />
          <NavItem title="Evenimente" url="/outreach" />
          <NavItem title="Echipă" url="/team" />
        </nav>
        <nav className="sm:hidden">
          <button onClick={() => setDrawer(true)}>
            <img className="h-8" src={menu_ic} alt="menu icon" />
          </button>
        </nav>
      </header>
      <div
        className={`fixed w-auto h-full right-0 ${
          drawer ? "translate-x-0" : "translate-x-full"
        } transition-all sm:translate-x-full z-20 bg-white/60 backdrop-blur-2xl p-6`}
      >
        <button onClick={() => setDrawer(false)} className="mb-6">
          <img className="h-8 opacity-70" src={close_ic} alt="close icon" />
        </button>
        <nav className="flex gap-4 flex-col">
          <NavItem title="Acasă" url="/" />
          <NavItem title="Evenimente" url="/outreach" />
          <NavItem title="Echipă" url="/team" />
        </nav>
      </div>
    </>
  );
};

const NavItem = (props) => {
  return (
    <Link
      to={props.url}
      className="hover:underline cursor-pointer underline-offset-4"
    >
      {props.title}
    </Link>
  );
};

export default Navbar;
