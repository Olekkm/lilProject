import { useEffect, useState } from "react";
import KeyValue from "./KeyValue";
import Select from "./Select";
import Button from "./Button";
import LinkButton from "./LinkButton";

export default function Request({ number }) {
  const [delivery, setDelivery] = useState("");
  const [request, setRequest] = useState();
  const [options, setOptions] = useState([]);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    (async function getData() {
      const ans = await fetch(`/api/request/${number}`);
      const req = await ans.json();
      setRequest(req);
      if (req?.status == "В обработке") {
        const optionsResponse = await (
          await fetch(
            `/api/delivery?from=${req?.location_from}&to=${req?.location_to}`
          )
        ).json();

        const optionsArray = [];
        optionsResponse.forEach((option) => {
          optionsArray.push({
            id: option.delivery_id,
            name: `${option.start_location} -> ${option.final_location}`,
          });
        });
        setOptions(optionsArray);
      }
    })();
    return;
  }, [number, submit]);

  return (
    <div key={number} className="classicFrame" style={{ marginTop: "5rem" }}>
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
      {request?.status == "В обработке" && (
        <form
          number={number}
          className="basePairDiv"
          style={{ marginTop: "2rem" }}
        >
          <Select
            id={request.id}
            label={"Выбрать доставку"}
            value={delivery}
            options={options}
            onChange={setDelivery}
          />
          <div>
            <Button
              disabled={!delivery}
              value={"Подтвердить"}
              onClick={async (e) => {
                e.preventDefault();
                const ans = await fetch(`/api/request/`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    requestId: number,
                    deliveryId: delivery,
                    rejected: false,
                  }),
                });
                if (ans) setSubmit((prev) => !prev);
              }}
            ></Button>
            <LinkButton
              onClick={async () => {
                const ans = await fetch(`/api/request/`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    requestId: number,

                    rejected: true,
                  }),
                });
                if (ans) setSubmit((prev) => !prev);
              }}
              value={"Отклонить"}
            ></LinkButton>
          </div>
        </form>
      )}
    </div>
  );
}
