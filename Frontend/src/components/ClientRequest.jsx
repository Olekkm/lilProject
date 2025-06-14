import { useEffect, useState } from "react";
import KeyValue from "./KeyValue";
import Select from "./Select";

export default function ClientRequest({ number }) {
  const [request, setRequest] = useState();
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
    </div>
  );
}
