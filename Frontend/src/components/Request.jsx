import { useEffect, useState } from "react";
import KeyValue from "./KeyValue";
import Select from "./Select";
import Button from "./Button";
import LinkButton from "./LinkButton";

export default function Request({ number }) {
  const [delivery, setDelivery] = useState("");
  const [request, setRequest] = useState();

  const options = [
    { id: 1, name: "qeqe" },
    { id: 2, name: "ewqeweqe" },
  ];

  useEffect(() => {
    async function getData() {
      const ans = await fetch("/api/re");
      setRequest(await ans.json());
    }
    return;
  }, []);

  return (
    <div className="classicFrame" style={{ marginTop: "5rem" }}>
      <div className="basePairDiv">
        <KeyValue _key="№">{number}</KeyValue>
        <KeyValue _key="Статус">
          {request ? request?.status : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Откуда">
          {request ? request?.from : "loading..."}
        </KeyValue>
        <KeyValue _key="Получатель">
          {request ? request?.name : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Куда">{request ? request?.to : "loading..."}</KeyValue>
        <KeyValue _key="Тел.">
          {request ? request?.phone : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Вес">
          {request ? request?.weight : "loading..."}
        </KeyValue>
        <KeyValue _key="Размер">
          {request ? request?.size : "loading..."}
        </KeyValue>
      </div>
      <form
        number={number}
        className="basePairDiv"
        style={{ marginTop: "2rem" }}
      >
        <Select
          label={"Выбрать доставку"}
          value={delivery}
          options={options}
          onChange={setDelivery}
        />
        <div>
          <Button value={"Подтвердить"}></Button>
          <LinkButton value={"Отклонить"}></LinkButton>
        </div>
      </form>
    </div>
  );
}
