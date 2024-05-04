import PropType from "prop-types";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-60" src={img} alt="avatar" />

        <div className="py-5 text-start px-4">
          <p
            className="block text-2xl font-bold text-[#444444] dark:text-white"
            
          >
            {title}
          </p>
          <span className="text-xl text-[#FF3811] font-semibold dark:text-gray-200">
            Price: ${price}
          </span>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropType.object,
};
export default ServiceCard;
