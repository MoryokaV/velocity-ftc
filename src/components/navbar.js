import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white/25 flex justify-between items-center backdrop-blur-lg w-full h-14 px-6">
      <div className="flex gap-2 h-full items-center">
        <img src={logo} alt="Velocity logo" className="h-full" />
        <h4 className="tracking-tight font-medium text-lg">Velocity</h4>
      </div>

      <nav className="flex gap-4">
        <NavItem title="Acasă" url="/" />
        <NavItem title="Evenimente" url="/outreach" />
        <NavItem title="Echipă" url="/team" />
        <NavItem title="Arhivă" url="/archive" />
      </nav>
    </header>
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
