import React from "react";
import history from "../services/history";
import { useNavigate } from "react-router-dom";
// import { Container } from './styles';

export function Header() {
  let navigate = useNavigate();

  /*const handleClickLogin = () => {
    history.push("/about");
    console.log(oi);
  };*/

  function handleClickAbout() {
    navigate("/about");
  }

  function handleClickHome() {
    navigate("/");
  }

  return (
    <>
      <header className="flex justify-between items-center w-full pb-10 pt-10 pl-10 pr-10 ">
        <h1 className="color-black font-bold text-3xl">
          <span className="font-thin">beer</span>Better
        </h1>
        <div>
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
