import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Banner } from "../Banner";
import { Footer } from "../Footer";
import { Header } from "../Header";

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
      <div className="w-auto max-w-7xl h-auto block mt-0 ml-20 mr-20 mb-20 relative box-border">
        <Header />
        <Banner />
        <h2 className="font-semibold text-2xl text-center leading-6 mb-5">
          Cervejas Artesanais
        </h2>
        <div className="md:h-full flex items-center text-gray-600">
          <div className="container px-5 py-16 mx-auto">
            <div className="grid grid-cols-3 gap-12 w-full flex-wrap justify-center mb-3">
              {currentDatas.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="shadow-2xl hover:shadow-green-400 cursor-pointer text-center block w-auto"
                    onClick={() => changecontent(data)}
                  >
                    <img
                      src={data.image_url}
                      className="w-auto  max-h-72 border-none"
                    ></img>
                    {data.name}
                  </div>
                );
              })}
            </div>
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
            <div onClick={(e) => window.scrollTo(0, 0)}>
              {Array.from(Array(pages), (data, index) => {
                return (
                  <button
                    value={index}
                    onClick={(e) => setCurrentPage(Number(e.target.value))}
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {popupTogle && (
          <div
            onClick={changecontent}
            className="fixed top-0 pt-20 bottom-0 left-0 right-0 bg-black/30"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-3/4 h-auto bg-white m-auto rounded-2xl box-border"
            >
              <div className="w-full text-right pr-2">
                <button
                  onClick={changecontent}
                  className="rounded-full hover:bg-gray-200 delay-50 duration-100 p-1"
                >
                  x
                </button>
              </div>
              <div className="text-center justify-center p-10 flex-auto block border-solid box-border">
                {popupContent.map((data) => {
                  return (
                    <div>
                      <p className="hover:font-semibold pb-1">
                        Name: {data.name}
                      </p>
                      <p className="hover:font-semibold">
                        Description: {data.description}
                      </p>
                      <p className="hover:font-semibold">
                        Tagline: {data.tagline}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
