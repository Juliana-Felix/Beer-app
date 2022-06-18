import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { Header } from "./Header";

// import { Container } from './styles';

export function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <h2>Populares</h2>
      <div className="flex flex-column flex-wrap justify-center w-full h-auto">
        <div>
          <div className="flex max-w-md flex-wrap justify-between">
            {beers.map((data) => {
              return (
                <div key={data.name} className=" bg-slate-500">
                  <img
                    src={data.image_url}
                    className="w-auto max-h-72 border-none"
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
