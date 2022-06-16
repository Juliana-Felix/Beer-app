import React, { useEffect, useState } from "react";
import { api } from "../services/api";

// import { Container } from './styles';

export function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <ul>
      {beers.map((data) => {
        return (
          <li key={data.name}>
            <p>{data.name}</p>
            <button>oi</button>
          </li>
        );
      })}
    </ul>
  );
}
