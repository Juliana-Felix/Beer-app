import React from "react";

export function Banner() {
  return (
    <div className="w-full max-w-7xl pl-10 pr-10">
      <section className="bg-amber-200 h-52 flex flex-row items-center rounded-3xl">
        <div className="pl-10">
          <h2 className="text-2xl font-bold text-start pb-4">
            Encontre a <span className="block">cerveja perfeita</span>
          </h2>
          <p className=" block max-w-md text-2xl font-normal leading-6">
            Descubra qual cerveja é ideal para você ou para aquele churrasco com
            a galera.
          </p>
        </div>
      </section>
    </div>
  );
}
