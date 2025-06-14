import { useMatches } from "react-router-dom";
import Logo from "../assets/Logo.png";
import HeaderNavigation from "./HeaderNavigation";

export default function Header({ type }) {
  return (
    <div className="Header">
      <a className="LogoLink">
        <img src={Logo} className="Logo" alt="Logo" />
      </a>
      <HeaderNavigation type={type} />
    </div>
  );
}
