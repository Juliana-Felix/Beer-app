import React from "react";
import { Banner } from "./Banner";

// import { Container } from './styles';

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-full pb-10 pt-10 pl-10 pr-10">
        <h1 className="color-black font-bold text-3xl">
          <span className="font-thin">beer</span>Better
        </h1>
        <button className="text-base">sobre</button>
      </header>
    </>
  );
}

/*display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    height: auto;
    width: 100%;
    max-width: 80rem;
    box-sizing: border-box;
    padding: 40px;
    background-color:*/
