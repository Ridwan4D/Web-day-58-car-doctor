import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const [services,setServices] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/services')
    .then(res => res.json())
    .then(data => {
      setServices(data)
      // console.log(data);
    })
  },[])
  // console.log(services);
  return (
    <div className="my-16">
      <div className="text-center space-y-2">
        <h4 className="text-xl font-bold text-[#FF3811]">Services</h4>
        <h2 className="text-5xl font-bold text-[#151515]">Our Service Area</h2>
        <p className="text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or Randomised <br /> words which do not look even slightly believable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {
            services.map((service,idx)=> <ServiceCard key={idx} service={service}></ServiceCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
