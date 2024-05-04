import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="hero py-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 md:relative space-y-2 md:space-y-0">
            <img src={person} className="md:w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="md:w-1/2 md:absolute top-36 right-20 md:border-8 border-white rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="md:pr-32 space-y-5">
              <h2 className="text-xl font-bold text-[#FF3811]">About Us</h2>
              <h1 className="text-5xl font-bold text-[#151515]">
                We are qualified & of experience in this field
              </h1>
              <p className="text-[#737373]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look even
                slightly believable.
              </p>
              <p className="text-[#737373]">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which do not look even slightly
                believable.
              </p>
              <button className="btn text-lg text-white bg-[#FF3811]">Get More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
