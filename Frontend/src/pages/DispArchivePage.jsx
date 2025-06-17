import { useEffect, useState } from "react";
import Request from "../components/Request";

export default function DispArchivePage() {
  const [requests, setRequests] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/request?from=archive");
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
          <Request
            number={request.id}
            key={request.id}
            style={{ marginTop: "4rem" }}
          />
        ))}
    </>
  );
}
