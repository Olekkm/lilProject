import BackgroundPhoto from "../assets/bg.jpg";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function OutletPage() {
  const location = useLocation();
  const userType = location.pathname.startsWith("/dispatch")
    ? "Dispatcher"
    : "User";
  return (
    <>
      <Header type={userType || "Dispatcher"} />
      <img src={BackgroundPhoto} className="BackgroundPhoto"></img>
      <div className="Body" style={{ display: "block" }}>
        <Outlet />
      </div>
    </>
  );
}
