import Masthead from "../components/masthead";
import ScrollObserver from "../utils/scroll-observer";
import Footer from "../components/footer";

import AboutData from "../data/aboutData";
import GeneralData from "../data/general";

import logo_red from "../assets/logo_red.png";
import logo_blue from "../assets/logo_blue.png";

const Home = () => {
  return (
    <ScrollObserver>
      <Masthead />
      <section className="py-10 w-full" style={{ backgroundColor: "#f1f3f5" }}>
        <div className="marquee">
          <div className="whitespace-nowrap overflow-hidden">
            {GeneralData.sponsors.map((sponsor, index) => {
              return (
                <img
                  src={sponsor.icon}
                  alt={sponsor.name}
                  key={index}
                  className="h-16"
                />
              );
            })}
          </div>
          <div className="whitespace-nowrap overflow-hidden">
            {GeneralData.sponsors.map((sponsor, index) => {
              return (
                <img
                  src={sponsor.icon}
                  alt={sponsor.name}
                  key={index}
                  className="h-16"
                />
              );
            })}
          </div>
        </div>
      </section>
      <main className="px-52 pb-10" style={{ backgroundColor: "#f1f3f5" }}>
        <section className="mb-10">
          <h3 className="font-semibold mb-4 text-2xl">Ce este FTC?</h3>
          <p className="tracking-wide mb-2">{AboutData.ftc_p1}</p>
          <p className="tracking-wide">{AboutData.ftc_p2}</p>
        </section>
        <section className="mb-10">
          <h3 className="font-semibold mb-4 text-2xl">Despre noi</h3>
          <p className="tracking-wide">{AboutData.who_we_are}</p>
        </section>
        <Gallery />
        <section className="mb-10 flex items-center">
          <img
            src={logo_red}
            alt="VelocityRed logo"
            className="w-1/4 mr-4 drop-shadow-md"
          />
          <div>
            <h3 className="font-medium mb-4 text-3xl">
              Ce ii recomanda pe cei de la{" "}
              <span className="font-semibold text-red-600">Velocity Red</span>?
            </h3>
            <p className="tracking-wide">{AboutData.red}</p>
          </div>
        </section>
        <section className="mb-10 flex items-center">
          <img
            src={logo_blue}
            alt="VelocityBlue logo"
            className="w-1/4 mr-4 drop-shadow-md"
          />
          <div>
            <h3 className="font-medium mb-4 text-3xl">
              Cum a luat nastere{" "}
              <span className="font-semibold text-blue-600">Velocity Blue</span>
              ?
            </h3>
            <p className="tracking-wide">{AboutData.blue}</p>
          </div>
        </section>
      </main>
      <Footer />
    </ScrollObserver>
  );
};

const Gallery = () => {
  return (
    <div className="grid grid-cols-4 gap-2 mb-10">
      {AboutData.gallery.map((robot, index) => (
        <figure key={index} className="overflow-hidden">
          <img
            src={robot}
            className="block w-full h-full max-h-72 object-cover hover:scale-110 transition-all"
            alt={`robot${index}`}
          />
        </figure>
      ))}
    </div>
  );
};

export default Home;
