import React from "react";
import trigopic from "../assets/trigopic.png";

export function Banner() {
  return (
    <div className="">
      <section className="bg-amber-200 h-auto grid grid-cols-2 flex-wrap items-center rounded-3xl mb-3">
        <div className="pl-10 block">
          <h2 className="text-xl font-bold text-start pt-2">
            Encontre a <span className="block">cerveja perfeita</span>
          </h2>
          <p
            className=" block max-w-md text-xl
           font-normal leading-6 pb-2 pt-2 pr-1"
          >
            Descubra a cerveja ideal para você.
          </p>
        </div>
        <img src={trigopic} className="w-2/5" />
      </section>
    </div>
  );
}
