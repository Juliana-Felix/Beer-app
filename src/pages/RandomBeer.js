import React, { useEffect, useState } from "react";
import { api } from "../services/api";

export function RandomBeer() {
  const [randomContent, setrandomContent] = useState([]);
  const [randomTogle, setrandomTogle] = useState(false);
  const [randombeer, setrandombeer] = useState([]);

  const changeBeer = () => {
    setrandomTogle(!randomTogle);
  };

  useEffect(() => {
    api.get("/random").then((response) => {
      setrandombeer(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <button onClick={() => changeBeer}>Beba</button>
      </div>
      <div>{randomTogle && <h2>{randombeer}</h2>}</div>
    </>
  );
}
