import Button from "./Button";
import Modal from "./Modal";

export default function IdModal({ open, id, onClick }) {
  return (
    <Modal style={{ textAlign: "center" }} open={open}>
      <h2>Ваша заявка успешно зарегистрирована</h2>
      <span className="defaultText">Идентификатор вашей заяки: {id}</span>
      <br />
      <Button
        style={{ marginTop: "1rem" }}
        value={"Ок"}
        onClick={onClick}
      ></Button>
    </Modal>
  );
}
