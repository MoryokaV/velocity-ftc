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

export default SocialIcon;
