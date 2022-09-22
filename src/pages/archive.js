import archive_ic from "../assets/icons/document-attach-outline.svg";
import Navbar from "../components/navbar";

const Archive = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 mb-2 flex flex-col jusify-center items-center gap-4">
        <img
          alt="Archive svg icon"
          src={archive_ic}
          className="bg-gray-300 p-4 w-28 rounded-md"
        />
        <h2 className="font-semibold text-4xl">Arhivă</h2>
      </div>
      <div className="mx-auto mb-10 w-16 h-1 bg-blue-800"></div>
      <main className="flex jusify-center">
        <div className="flex flex-col">
          {ArchiveData.map((archive, index) => {
            return (
              <p
                key={index}
                className="text-lg hover:text-blue-800 transition-all"
              >
                {archive.years}
              </p>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Archive;
