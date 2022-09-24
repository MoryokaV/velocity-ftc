import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MemberCard from "../components/memberCard";

import TeamData from "../data/teamData";

import construction_ic from "../assets/icons/hammer-outline.svg";
import programming_ic from "../assets/icons/code-slash-outline.svg";
import printing_ic from "../assets/icons/cube-outline.svg";
import journal_ic from "../assets/icons/book-outline.svg";

const Team = () => {
  return (
    <>
      <Navbar />
      <Departments />
      <main className="mt-10 pb-10 px-10 md:px-28 xl:px-48">
        <section className="mb-10">
          <h2 className="font-semibold text-3xl md:text-4xl mb-2 text-center">
            Echipa noastră
          </h2>
          <div className="mx-auto w-28 h-1 bg-blue-500 mb-6"></div>
          <p className="tracking-wide text-lg">{TeamData.about}</p>
        </section>
        <section className="mb-10">
          <h2 className="font-semibold text-3xl md:text-4xl mb-2 text-center">
            Membri
          </h2>
          <div className="mx-auto w-28 h-1 bg-blue-500 mb-6"></div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {TeamData.members.map((member, index) => {
              return <MemberCard member={member} key={index} />;
            })}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="font-semibold text-3xl md:text-4xl mb-2 text-center">
            Mentori
          </h2>
          <div className="mx-auto w-16 h-1 bg-blue-500 mb-6"></div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {TeamData.mentors.map((mentor, index) => {
              return <MemberCard member={mentor} key={index} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const Departments = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 mt-14">
      <div className="bg-gray-300 w-full flex flex-col justify-center items-center p-4 h-[10rem] sm:h-[15rem]">
        <img
          src={construction_ic}
          alt="Construction icon"
          className="w-1/3 mb-4"
        />
        <h3 className="font-semibold text-gray-500 text-md md:text-lg">
          Construcții
        </h3>
      </div>
      <div className="bg-gray-200 w-full flex flex-col justify-center items-center p-4 h-[10rem] sm:h-[15rem]">
        <img
          src={programming_ic}
          alt="Programming icon"
          className="w-1/3 mb-4"
        />
        <h3 className="font-semibold text-gray-400 text-md md:text-lg">
          Programare
        </h3>
      </div>
      <div className="bg-gray-300 w-full flex flex-col justify-center items-center p-4 h-[10rem] sm:h-[15rem]">
        <img src={printing_ic} alt="Printing icon" className="w-1/3 mb-4" />
        <h3 className="font-semibold text-gray-500 text-md md:text-lg">
          Printare 3D
        </h3>
      </div>
      <div className="bg-gray-200 w-full flex flex-col justify-center items-center p-4 h-[10rem] sm:h-[15rem]">
        <img src={journal_ic} alt="Journal icon" className="w-1/3 mb-4" />
        <h3 className="font-semibold text-gray-400 text-md md:text-lg">
          Marketing & Jurnal
        </h3>
      </div>
    </div>
  );
};

export default Team;
