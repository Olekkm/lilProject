import { useEffect, useState } from "react";
import Request from "../components/Request";

export default function DispRequestPage() {
  const [requests, setRequests] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/requests");
      if (response) {
        setRequests(await response.JSON.parse());
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
          <Request number={request} style={{ marginTop: "4rem" }} />
        ))}
    </>
  );
}
