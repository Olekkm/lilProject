import { useEffect, useState } from "react";
import KeyValue from "./KeyValue";
import Select from "./Select";

export default function ClientRequest({ number }) {
  const [request, setRequest] = useState();
  useEffect(() => {
    (async function getData() {
      const ans = await fetch(`/api/request/${number}`);
      setRequest(await ans.json());
    })();
    return;
  }, [number]);

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
          {request ? request?.location_from : "loading..."}
        </KeyValue>
        <KeyValue _key="Получатель">
          {request ? request?.clients_name : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Куда">
          {request ? request?.location_to : "loading..."}
        </KeyValue>
        <KeyValue _key="Тел.">
          {request ? request?.clients_phone : "loading..."}
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
