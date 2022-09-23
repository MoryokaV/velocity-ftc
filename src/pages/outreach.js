import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import OutreachData from "../data/outreachData";

const Outreach = () => {
  return (
    <>
      <Navbar />
      <section className="my-14 mx-52">
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
              className="flex items-center justify-center border-y-2 gap-12 px-16 py-8"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-1/4 rounded-md hover:scale-110 transition-all"
              />
              <div>
                <h3 className="font-medium text-xl mb-1">{event.title}</h3>
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
