import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  // console.log(service);
  const { title, _id, img, price } = service;
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = form.email.value;
    const booking = {
      customerName: name,
      service: title,
      service_id: _id,
      date,
      email,
      img,
      price,
    };
    // console.log(booking);

    fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Booking added")
        setTimeout(() => {
          navigate("/bookings")
        }, 1000);
      });
  };
  return (
    <div className="space-y-10">
      <h3 className="text-3xl mt-8">Book Services: {title}</h3>

      <section className="bg-gray-200 py-5 dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <form onSubmit={handleBookService}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="date"
                  name="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="price"
                  defaultValue={`$ ${price}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your Message..."
                ></textarea>
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="btn w-full bg-[#FF3811] text-white"
                value="Order Confirm"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
