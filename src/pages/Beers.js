import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
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
      <Banner />
      <h2 className="font-semibold text-2xl text-center leading-6 mb-5">
        Cervejas Populares
      </h2>
      <div className="flex flex-column flex-wrap justify-center w-full h-auto">
        <div>
          <div className="grid grid-cols-3 gap-12 w-full flex-wrap justify-center">
            {beers.map((data) => {
              return (
                <div
                  key={data.name}
                  className="shadow-2xl hover:shadow-green-500 cursor-pointer text-center block"
                >
                  <img
                    src={data.image_url}
                    className="w-auto max-h-72 border-none"
                  ></img>
                  {data.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
