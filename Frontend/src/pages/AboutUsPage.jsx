import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function AboutUsPage() {
  const navigate = useNavigate();
  return (
    <div
      className="classicFrame"
      style={{
        maxWidth: "80%",
        marginTop: "4rem",
        minHeight: "calc(80vh - 20rem)",
        textAlign: "center",
      }}
    >
      <h1>CDEK2</h1>
      <h2
        style={{
          fontSize: "4.8rem",
          marginTop: "4rem",
          fontWeight: "bold",
          marginBottom: "0rem",
        }}
      >
        Скорость, надежность и удобство
      </h2>
      <h3
        style={{
          color: "var(--default-font)",
          fontSize: "2rem",
          marginTop: "2rem",
          fontWeight: "bold",
          marginLeft: "-35rem",
        }}
      >
        - Фундамент нашей компании
      </h3>
      <p
        style={{ marginTop: "10rem", fontSize: "2rem" }}
        className="defaultText"
      >
        Мы предоставляем лучшие услуги по грузоперевоке в сибири
        <br />с 2025 года
      </p>
      <Button
        value={"Оставить заявку"}
        style={{ marginTop: "5rem" }}
        onClick={() => navigate("/send")}
      />
    </div>
  );
}
