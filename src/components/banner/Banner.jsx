import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import slider1 from '../../assets/images/banner/1.jpg'
import slider2 from '../../assets/images/banner/2.jpg'
import slider3 from '../../assets/images/banner/3.jpg'
import slider4 from '../../assets/images/banner/5.jpg'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[80vh]">
          <img
            src={slider1}
            className="w-full rounded-lg"
          />
          <div className="absolute justify-start pt-16 w-1/2 space-y-5 md:pl-32 md:pr-32 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white gap-5 transform">
            <h3 className="text-6xl font-bold">Affordable Price For Car Servicing</h3>
            <p className="text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-2">
                <button className="btn font-semibold bg-[#FF3811] rounded-none text-white text-lg">Discover More</button>
                <button className="btn font-semibold bg-[#FFFFFF53] rounded-none text-white text-lg">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex gap-5 transform right-16 top-3/4">
            <a href="#slide4" className="btn font-bold btn-circle bg-[#FFFFFF53] text-white border-0"><GoArrowLeft /></a>
            <a href="#slide2" className="btn font-bold btn-circle bg-[#FF3811] border-0 text-white"><GoArrowRight /></a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[80vh]">
          <img
            src={slider2}
            className="w-full rounded-lg"
          />
          <div className="absolute justify-start pt-16 w-1/2 space-y-5 md:pl-32 md:pr-32 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white gap-5 transform">
            <h3 className="text-6xl font-bold">Affordable Price For Car Servicing</h3>
            <p className="text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-2">
                <button className="btn font-semibold bg-[#FF3811] rounded-none text-white text-lg">Discover More</button>
                <button className="btn font-semibold bg-[#FFFFFF53] rounded-none text-white text-lg">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex gap-5 transform right-16 top-3/4">
            <a href="#slide1" className="btn font-bold btn-circle bg-[#FFFFFF53] text-white border-0"><GoArrowLeft /></a>
            <a href="#slide3" className="btn font-bold btn-circle bg-[#FF3811] border-0 text-white"><GoArrowRight /></a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[80vh]">
          <img
            src={slider3}
            className="w-full rounded-lg"
          />
          <div className="absolute justify-start pt-16 w-1/2 space-y-5 md:pl-32 md:pr-32 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white gap-5 transform">
            <h3 className="text-6xl font-bold">Affordable Price For Car Servicing</h3>
            <p className="text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-2">
                <button className="btn font-semibold bg-[#FF3811] rounded-none text-white text-lg">Discover More</button>
                <button className="btn font-semibold bg-[#FFFFFF53] rounded-none text-white text-lg">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex gap-5 transform right-16 top-3/4">
            <a href="#slide2" className="btn font-bold btn-circle bg-[#FFFFFF53] text-white border-0"><GoArrowLeft /></a>
            <a href="#slide4" className="btn font-bold btn-circle bg-[#FF3811] border-0 text-white"><GoArrowRight /></a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[80vh]">
          <img
            src={slider4}
            className="w-full rounded-lg"
          />
          <div className="absolute justify-start pt-16 w-1/2 space-y-5 md:pl-32 md:pr-32 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white gap-5 transform">
            <h3 className="text-6xl font-bold">Affordable Price For Car Servicing</h3>
            <p className="text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-2">
                <button className="btn font-semibold bg-[#FF3811] rounded-none text-white text-lg">Discover More</button>
                <button className="btn font-semibold bg-[#FFFFFF53] rounded-none text-white text-lg">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex gap-5 transform right-16 top-3/4">
            <a href="#slide3" className="btn font-bold btn-circle bg-[#FFFFFF53] text-white border-0"><GoArrowLeft /></a>
            <a href="#slide1" className="btn font-bold btn-circle bg-[#FF3811] border-0 text-white"><GoArrowRight /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
