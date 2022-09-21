import ig from "../assets/icons/instagram.png";
import fb from "../assets/icons/facebook.png";
import gh from "../assets/icons/github.png";

const MemberCard = (props) => {
  const {
    image,
    name,
    category,
    quote,
    facebook,
    instagram,
    github,
    teamName,
  } = props.member;

  return (
    <figure className="flex flex-col bg-white rounded-md drop-shadow p-6 w-full h-[28rem]">
      <img
        src={image}
        alt={name}
        className="rounded-full w-32 h-32 object-cover mb-2 mx-auto drop-shadow"
      />
      <h4 className="text-center font-medium text-xl mb-6">{name}</h4>
      <p className="text-gray-500 uppercase mb-2 tracking-wider text-sm">
        {category}
      </p>
      <blockquote className="tracking-wide text-lg italic">
        "{quote}"
      </blockquote>
      <footer className="mt-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2 opacity-75">
          <SocialIcon url={facebook} icon={fb} />
          <SocialIcon url={instagram} icon={ig} />
          <SocialIcon url={github} icon={gh} />
        </div>
        {teamName && <img src={teamName} alt="Team logo" className="w-1/6" />}
      </footer>
    </figure>
  );
};

const SocialIcon = (props) => {
  return (
    props.url && (
      <img
        src={props.icon}
        alt="social media icon"
        className="w-6 grayscale hover:grayscale-0 cursor-pointer"
        onClick={() => window.open(props.url)}
      />
    )
  );
};

export default MemberCard;
