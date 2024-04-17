import React, { useState } from "react";

function Newsletter() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    city: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or perform validation
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      number: "",
      city: "",
      query: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex max-w-screen-lg w-full bg-white rounded-lg shadow-lg">
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center p-8 bg-gray-200 md:w-2/3 lg:w-3/5">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h2>
          <p className="text-lg text-gray-800">
            Have questions? Feel free to reach out to us. We are happy to assist
            you.
          </p>
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center items-center p-8 md:w-1/3 lg:w-2/5">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Inquiry Form
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="h-10 rounded-lg  text-gray-800 border border-gray-300 focus:outline-none focus:border-primary"
              style={{ lineHeight: "normal", fontSize: "0.875rem" }}/>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="placeholder-opacity-50 h-10 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your City"
              className="h-10 rounded-lg px-2 text-gray-800 border border-gray-300 focus:outline-none focus:border-primary"
            />
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Your Query"
              className="h-24 rounded-lg px-2 text-gray-800 border border-gray-300 focus:outline-none focus:border-primary"
            ></textarea>
            <button
              type="submit"
              className=" bg-gray-900 text-white h-12 rounded-lg hover:bg-primary-dark transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
