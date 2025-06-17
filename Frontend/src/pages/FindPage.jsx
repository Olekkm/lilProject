import { useState, useEffect } from "react";
import ClientRequest from "../components/ClientRequest";

export default function FindPage() {
  const [requests, setRequests] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/request");
      if (response) {
        setRequests(await response.json());
      }
      return;
    })();
    return () => {};
  }, []);

  return (
    <>
      {!requests && (
        <div className="classicFrame" style={{ marginTop: "4rem" }}>
          <p className="DefaultText">Loading ...</p>
        </div>
      )}
      {requests &&
        requests.map((request) => (
          <ClientRequest
            number={request.id}
            key={request.id}
            style={{ marginTop: "4rem" }}
          />
        ))}
    </>
  );
}
