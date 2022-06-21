import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Oktoberfest from "../../assets/oktoberfest.png";
import reactpic from "../../assets/reactpic.png";
import jspic from "../../assets/jspic.png";
import gitpic from "../../assets/gitpic.png";

export function About() {
  return (
    <>
      <div className="w-auto max-w-7xl h-auto block mt-0 ml-20 mr-16 mb-20 relative box-border">
        <Header />
        <article>
          <div>
            <section className="bg-green-200 h-52 grid grid-cols-2 items-center rounded-3xl mb-3">
              <h2 className="text-center block m-0 font-semibold text-2xl">
                Sobre Beer Better
              </h2>
              <img
                src={Oktoberfest}
                alt=""
                className="w-2/5 max-h-56 mb-5 h-auto"
              ></img>
            </section>
            <section className="block">
              <p>
                Este site não tem proposito comercial. Foi feito por{" "}
                <a
                  href="https:www.github.com/juliana-felix"
                  target="_blank"
                  className="underline pr-1"
                >
                  Juliana Félix
                </a>
                como um trabalho para apresentar suas habilidades em{" "}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  className=" underline pr-1"
                >
                  React.
                </a>
                A fonte do código para seu projeto pode ser encontrado no{" "}
                <a
                  href="https://github.com/Juliana-Felix/Beer-app"
                  target="_blank"
                  className="underline"
                >
                  Repositório do github
                </a>{" "}
                .
              </p>
              <p>
                Juliana é uma desenvolvedora Front-end focada em React. Ela é
                brasileira, mora na Paraíba, e ama cervejas.
              </p>
            </section>
            <section className="mt-10 mb-10 block">
              <h3 className="text-left mb-5 font-sans font-semibold block">
                Tecnologias utilizadas
              </h3>
              <div className="flex flex-wrap flex-row justify-around w-full max-w-7xl mb-5 items-center">
                <img src={jspic} alt="" className="w-10 h-10" />
                <img src={reactpic} alt="" className="w-10 h-10" />
                <img src={gitpic} alt="" className="w-10 h-10" />
              </div>
            </section>
            <section className="block">
              <h3 className="text-left mb-5 font-sans font-semibold block">
                Créditos
              </h3>
              <p>
                Esse site usa{" "}
                <a
                  href="https://punkapi.com/"
                  target="_blank"
                  className="underline"
                >
                  Punk api
                </a>
                , que é uma API gratuita e open-source.
              </p>
              <p>
                Todas os lindos icons foram feitos por{" "}
                <a
                  href="https:www.flaticon.com/"
                  target="_blank"
                  className="underline"
                >
                  Flaticon
                </a>
                .
              </p>
            </section>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
