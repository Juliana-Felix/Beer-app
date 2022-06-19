import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Header } from "./Header";

// import { Container } from './styles';

export function Beers() {
  const [beers, setBeers] = useState([]);
  const [popupContent, setpopupContent] = useState([]);
  const [popupTogle, setpopupTogle] = useState(false);
  const [datasPerPage, setDatasPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(beers.length / datasPerPage);
  const startIndex = currentPage * datasPerPage;
  const endIndex = startIndex + datasPerPage;
  const currentDatas = beers.slice(startIndex, endIndex);

  useEffect(() => {
    api.get().then((response) => {
      setBeers(response.data);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [datasPerPage]);

  const changecontent = (data) => {
    setpopupContent([data]);
    setpopupTogle(!popupTogle);
  };

  return (
    <>
      <Header />
      <Banner />
      <h2 className="font-semibold text-2xl text-center leading-6 mb-5">
        Cervejas Populares
      </h2>
      <div>
        <select
          value={datasPerPage}
          onChange={(e) => setDatasPerPage(Number(e.target.value))}
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
          <option value={12}>12</option>
        </select>
      </div>
      <div>
        {Array.from(Array(pages), (data, index) => {
          return (
            <button
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="flex flex-column flex-wrap justify-center w-full h-auto">
        <div>
          <div className="grid grid-cols-3 gap-12 w-full flex-wrap justify-center">
            {currentDatas.map((data) => {
              return (
                <div
                  key={data.id}
                  className="shadow-2xl hover:shadow-green-500 cursor-pointer text-center block"
                  onClick={() => changecontent(data)}
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
          {popupTogle && (
            <div
              onClick={changecontent}
              className="fixed top-0 pt-20 bottom-0 left-0 right-0 bg-black opacity-25"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-3/4 h-3/4 bg-white m-auto "
              >
                <div className="w-full text-right">
                  <button onClick={changecontent}>x</button>
                </div>
                <div>
                  {popupContent.map((data) => {
                    return (
                      <div>
                        <p>name: {data.name}</p>
                        <p>description: {data.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
