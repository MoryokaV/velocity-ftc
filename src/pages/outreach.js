import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import OutreachData from "../data/outreachData";

const Outreach = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r to-[#243c5a] from-[#50637b] w-full mt-14 text-right pt-4 pr-4 pb-2">
        <p className="text-3xl md:text-4xl text-white">Evenimente</p>
      </div>
      <section className="my-10 px-10 lg:px-48">
        <h2 className="font-semibold mb-2 text-2xl">
          De ce sunt importante evenimentele?
        </h2>
        <p className="tracking-wide">{OutreachData.about}</p>
      </section>
      <main className="w-full mb-10">
        {OutreachData.events.map((event, index) => {
          return (
            <figure
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center border-y-2 gap-12 px-10 lg:px-16 py-8"
            >
              <img
                src={event.image}
                alt={event.title}
                className={`w-9/12 lg:w-1/3 max-w-sm rounded-md hover:scale-110 transition-all ${
                  index % 2 === 0 ? "" : "lg:order-last"
                }`}
              />

              <div>
                <h3 className="font-medium text-2xl mb-1">{event.title}</h3>
                <p className="tracking-widest text-gray-400 mb-5">
                  {event.date}
                </p>
                <p className="tracking-wide">{event.content}</p>
              </div>
            </figure>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Outreach;
