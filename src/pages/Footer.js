import React from "react";

// import { Container } from './styles';

export function Footer() {
  return (
    <footer className="mt-4">
      <article className="flex pl-10 pr-10 pt-8 pb-8 rounded-3xl w-auto max-w-7xl flex-col justify-around items-center bg-amber-200">
        <p>
          <a
            className="underline"
            href="https:www.linkedin.com/in/julianafelixdesouza"
            target="_blank"
          >
            Juliana Félix
          </a>
          © <time>2022</time>.
        </p>
        <p>
          Feito com <span>❤</span> e{" "}
          <a href="https://reactjs.org/" className="underline">
            React
          </a>
          .{" "}
        </p>
      </article>
    </footer>
  );
}
