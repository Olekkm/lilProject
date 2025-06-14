import { useNavigate, useLocation } from "react-router-dom";
import LinkButton from "./LinkButton.jsx";

export default function HeaderNavigation({ type }) {
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/").pop();

  return (
    <>
      {type == "User" && (
        <div className="HeaderNavigation">
          <LinkButton
            onClick={() => navigate("send")}
            selected={location == "send"}
            value={"Отправить"}
            name="send"
          />
          <LinkButton
            value={"Отследить"}
            name="check"
            onClick={() => navigate("find")}
            selected={location == "find"}
          />
          <LinkButton
            value={"О нас"}
            name="aboutUs"
            onClick={() => navigate("aboutUs")}
            selected={location == "aboutUs"}
          />
        </div>
      )}

      {type == "Dispatcher" && (
        <div className="HeaderNavigation">
          <LinkButton
            value={"Заявки"}
            name="requests"
            onClick={() => navigate("/dispatch/requests")}
            selected={location == "requests"}
          />
          <LinkButton
            value={"Доставки"}
            name="deliveries"
            onClick={() => navigate("/dispatch/deliveries")}
            selected={location == "deliveries"}
          />
          <LinkButton
            value={"Архив"}
            name="archive"
            onClick={() => navigate("/dispatch/archive")}
            selected={location == "archive"}
          />
        </div>
      )}
    </>
  );
}
