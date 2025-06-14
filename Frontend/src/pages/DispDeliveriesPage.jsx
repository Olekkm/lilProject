import { useEffect, useState } from "react";
import Request from "../components/Request";

export default function DispDeliveriesPage() {
  const [deloveries, setDeliveries] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/deliveries");
      if (response) {
        setDeliveries(await response.json());
      }
      return;
    })();
    return () => {};
  }, []);

  return (
    <>
      {!deloveries && (
        <div className="classicFrame" style={{ marginTop: "4rem" }}>
          <p className="DefaultText">Loading ...</p>
        </div>
      )}
      {deloveries &&
        deloveries.map((Delivery) => (
          <Request number={Delivery} style={{ marginTop: "4rem" }} />
        ))}
    </>
  );
}
