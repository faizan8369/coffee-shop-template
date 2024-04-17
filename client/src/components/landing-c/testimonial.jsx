import React, { useState } from "react";
import starIcon from "../../assets/star.svg";
import phProfile from "../../assets/placeholder-profile.jpg";

// Import the star icon

const CustomerReviews = () => {
  const [state, setState] = useState({
    provide: [
      "High quality beans",
      "Healthy meals, you can request the ingredients",
      "Chat with our staff to get better experience for ordering",
      "Free member card with a minimum purchase of IDR 200.000.",
    ],
    reviews: [
      {
        name: "Foo Barr",
        text: "Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!",
      },
      {
        name: "Yessica Christy",
        text: "I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte",
      },
      {
        name: "Kim Young Jou",
        text: "This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town",
      },
    ],
  });
  return (
    <section className="global-px py-8 md:py-20">
      <div className="flex flex-col items-center mb-8 md:mb-20 text-center">
        <h2 className="text-3xl md:text-[35px] text-quartenary font-semibold mb-5">
          Loved by Customer of
          <br /> Happy Customer
        </h2>
        <p className="text-[1rem] text-center max-w-[555px] text-primary">
          These are the stories of our customers who have visited us with great
          pleasure.
        </p>
      </div>
      <div className="overflow-auto flex flex-row gap-5 flex-wrap lg:flex-nowrap">
        {state.reviews.map((review, idx) => (
          <div
            className="w-[400px] border-gray-300 hover:border-tertiary border-2 duration-200 rounded-xl p-7 space-y-4 hover:shadow-2xl mx-auto"
            key={idx}
          >
            <div className="flex flex-row gap-2 items-center">
              <img
                src={phProfile}
                alt=""
                className="w-14 aspect-square object-cover rounded-full"
              />
              <div className="flex-1">
                <p className="font-semibold text-quartenary text-lg">
                  {review.name}
                </p>
                <p className="text-primary text-sm">Warsaw, Poland</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                4.5 <img src={starIcon} alt="" />
              </div>
            </div>
            <p className="text-quartenary">“{review.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
