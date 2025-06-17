import { useEffect, useState } from "react";
import Delivery from "../components/Delivery";

export default function DispDeliveriesPage() {
  const [deliveries, setDeliveries] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/delivery");
      if (response) {
        setDeliveries(await response.json());
      }
      return;
    })();
    return () => {};
  }, []);

  return (
    <>
      {!deliveries && (
        <div className="classicFrame" style={{ marginTop: "4rem" }}>
          <p className="DefaultText">Loading ...</p>
        </div>
      )}
      {deliveries &&
        deliveries.map((delivery) => (
          <Delivery
            number={delivery.id}
            key={delivery.id}
            style={{ marginTop: "4rem" }}
          />
        ))}
    </>
  );
}
