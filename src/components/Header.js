import React from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  let navigate = useNavigate();

  function handleClickAbout() {
    navigate("/about");
  }

  function handleClickHome() {
    navigate("/");
  }

  return (
    <>
      <header className="flex justify-between items-center w-full pb-10 pt-10 pl-10 pr-10">
        <h1 className="color-black font-bold text-3xl pr-5">
          <span className="font-thin">beer</span>Better
        </h1>
        <div className="w-auto">
          <button onClick={handleClickHome} className="text-base mr-5">
            Principal
          </button>
          <button onClick={handleClickAbout} className="text-base">
            Sobre
          </button>
        </div>
      </header>
    </>
  );
}
