import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ArchiveData from "../data/archiveData";
import SocialIcon from "../components/socialIcon";

import archive_ic from "../assets/icons/file-tray-full-outline.svg";
import arrow_ic from "../assets/icons/chevron-forward-outline.svg";
import pdf_ic from "../assets/icons/pdf_ic.svg";

import ig from "../assets/icons/instagram.png";
import fb from "../assets/icons/facebook.png";
import gh from "../assets/icons/github.png";

const Archive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFile = (file) => {
    window.open(file);
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 mb-2 flex flex-col jusify-center items-center gap-4">
        <img
          alt="Archive svg icon"
          src={archive_ic}
          className="bg-gray-300 p-4 w-28 rounded-md opacity-50 shadow-sm"
        />
        <h2 className="font-semibold text-4xl">Arhivă</h2>
      </div>
      <div className="mx-auto mb-16 w-16 h-1 bg-blue-500"></div>
      <main className="mx-auto max-w-6xl mb-6 grid grid-cols-[200px_1fr] justify-center gap-16">
        <aside className="flex flex-col">
          {ArchiveData.map((archive, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`text-2xl hover:text-blue-500 transition-all duration-300 hover:shadow-[-2px_0] px-6 py-1 mx-2 mb-4 ${
                  index === currentIndex && "shadow-[-2px_0] text-blue-500"
                }`}
              >
                {archive.years}
              </button>
            );
          })}
        </aside>
        <article>
          <h3 className="text-4xl mb-3">{ArchiveData[currentIndex].title}</h3>
          <p className="py-1 px-3 bg-gray-200 text-gray-500 font-bold uppercase w-min whitespace-nowrap rounded-sm mb-3">
            {ArchiveData[currentIndex].theme}
          </p>
          <p className="tracking-widest text-gray-400 mb-6">
            {ArchiveData[currentIndex].date}
          </p>
          <div className="flex items-center gap-4 mb-6">
            <img src={arrow_ic} alt="arrow icon" className="w-6" />
            <p className="tracking-wide">
              {ArchiveData[currentIndex].paragraph1}
            </p>
          </div>
          {ArchiveData[currentIndex].paragraph2 && (
            <div className="flex items-center gap-4 mb-6">
              <img src={arrow_ic} alt="arrow icon" className="w-6" />
              <p className="tracking-wide">
                {ArchiveData[currentIndex].paragraph2}
              </p>
            </div>
          )}
          <footer className="w-full flex flex-wrap gap-4 mb-6">
            {ArchiveData[currentIndex].files.map((file, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-200 flex items-center gap-2 px-4 py-2 rounded-sm opacity-50 hover:opacity-100 hover:shadow cursor-pointer"
                  onClick={() => openFile(file.file)}
                >
                  <img
                    src={pdf_ic}
                    alt="file icon"
                    className="h-6 opacity-75"
                  />
                  <p>{file.name}</p>
                </div>
              );
            })}
          </footer>
        </article>
      </main>
      <section className="shadow-lg rounded-md p-4 m-6 ml-auto">
        <h4 className="font-medium mb-4">Website author</h4>
        <div className="flex items-center gap-2">
          <div className="bg-gray-300 font-bold rounded-full p-2">VM</div>
          <p className="font-bold">Vlaviano Mario</p>
          <div className="w-16"></div>
          <SocialIcon
            url="https://www.facebook.com/mario.vlaviano.75"
            icon={fb}
          />
          <SocialIcon url="https://www.instagram.com/mario.vlv" icon={ig} />
          <SocialIcon url="https://github.com/moryokav" icon={gh} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Archive;
