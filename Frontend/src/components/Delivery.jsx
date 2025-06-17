import { useEffect, useState } from "react";
import KeyValue from "./KeyValue";
import moment from "moment";

export default function Delivery({ number }) {
  const [{ data, path, requests }, setDelivery] = useState({});

  useEffect(() => {
    (async function getData() {
      const ans = await fetch(`/api/delivery/${number}`);
      const response = await ans.json();
      setDelivery(response);
    })();
    return;
  }, [number]);

  return (
    <div className="classicFrame" style={{ marginTop: "5rem" }}>
      {" "}
      {console.log()}
      <div className="basePairDiv">
        <KeyValue _key="№">{number}</KeyValue>
        <KeyValue _key="Статус">{data ? data?.status : "loading..."}</KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Cоздано">
          {data
            ? moment(data?.created_date).format("DD.MM.YYYY")
            : "loading..."}
        </KeyValue>
        <KeyValue _key="Завершено">
          {!data
            ? "loading..."
            : data.finaled_date
            ? moment(data.finaled_date).format("DD.MM.YYYY")
            : "Не завершено"}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Авто">{data ? data?.car : "loading..."}</KeyValue>
        <KeyValue _key="Водитель">
          {data ? data?.drivers_name : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <KeyValue _key="Категория">
          {data ? data?.car_category : "loading..."}
        </KeyValue>
        <KeyValue _key="Тел.">
          {data ? data?.drivers_phone : "loading..."}
        </KeyValue>
      </div>
      <div className="basePairDiv" style={{ marginTop: "2rem" }}>
        <div>
          <h4 className="semiHeaderText" style={{ marginBottom: "1rem" }}>
            Путь:
          </h4>

          {path?.map((point) => (
            <div key={point.location}>
              <KeyValue
                key={point.stage}
                _key={point.stage}
                keyStyle={{ fontSize: "1.6rem" }}
              >
                {point.location}
              </KeyValue>
            </div>
          ))}
        </div>
        <div>
          <h4 className="semiHeaderText" style={{ marginBottom: "1rem" }}>
            Связанные заявки:
          </h4>
          {requests && requests.length == 0 && (
            <div style={{ textAlign: "end" }} className="defaultText">
              Нет связанных заявок
            </div>
          )}
          {requests?.map((request) => (
            <div key={-request.request_id} style={{ textAlign: "end" }}>
              <span className="defaultText" key={request.request_id}>
                {request.request_id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
