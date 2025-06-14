import { useCallback, useEffect, useState } from "react";
import KeyValue from "./KeyValue";

export default function Delivery({ number }) {
  const [delivery, setDelivery] = useState({});

  const getDelivery = useCallback(async function (number) {
    try {
      const response = await fetch(`/api/delivery/${number}`);
      setDelivery(await response.json());
    } catch (e) {
      return;
    }
  }, []);

  useEffect(() => {
    getDelivery();
    return;
  }, [getDelivery]);
  return (
    <div className="classicFrame" style={{ marginTop: "5rem" }}>
      <div className="basePairDiv">
        <KeyValue _key="№">{number}</KeyValue>
        <KeyValue _key="Статус">
          {delivery ? delivery?.status : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Cоздано">
          {delivery ? delivery?.created : "loading..."}
        </KeyValue>
        <KeyValue _key="Завершено">
          {delivery ? delivery?.finished : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Авто">
          {delivery ? delivery?.vehicle : "loading..."}
        </KeyValue>
        <KeyValue _key="Водитель">
          {delivery ? delivery?.driverName : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Категория">
          {delivery ? delivery?.category : "loading..."}
        </KeyValue>
        <KeyValue _key="Тел.">
          {delivery ? delivery?.driverPhone : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <div>
          <h4 className="semiHeaderText" style={{ marginBottom: "1rem" }}>
            Путь:
          </h4>
          {delivery?.Path?.map((point) => (
            <KeyValue key={point.number}>{point.Name}</KeyValue>
          ))}
        </div>
        <div>
          <h4 className="semiHeaderText" style={{ marginBottom: "1rem" }}>
            Связанные доставки:
          </h4>
          {delivery?.requests?.map((request) => (
            <KeyValue key={request.number}>{request.Name}</KeyValue>
          ))}
        </div>
      </div>
    </div>
  );
}
