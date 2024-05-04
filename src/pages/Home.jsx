import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Banner from "../components/banner/Banner";

const Home = () => {
    return (
        <div>
            {/* slider banner  */}
            <Banner/>
            {/* About section */}
            <AboutSection/>
            {/* services section */}
            <ServicesSection/>
        </div>
    );
};

export default Home;