import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <section
      className="clean-block clean-hero"
      style={{
        backgroundImage: "url('/assets/img/tech/image4.jpg')",
        color: "rgba(9, 162, 255, 0.85)",
      }}
    >
      <div className="text">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
          urna, dignissim nec auctor in, mattis vitae leo.
        </p>
        <button className="btn btn-outline-light btn-lg" type="button">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
