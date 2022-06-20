import React from "react";
import trigopic from "../assets/trigopic.png";

export function Banner() {
  return (
    <div className="">
      <section className="bg-amber-200 h-52 grid grid-cols-2 flex-wrap items-center rounded-3xl mb-3">
        <div className="pl-10 block">
          <h2 className="text-xl font-bold text-start pb-4">
            Encontre a <span className="block">cerveja perfeita</span>
          </h2>
          <p
            className=" block max-w-md text-xl
           font-normal leading-6"
          >
            Descubra a cerveja é ideal para você.
          </p>
        </div>
        <img src={trigopic} className="w-2/5" />
      </section>
    </div>
  );
}
