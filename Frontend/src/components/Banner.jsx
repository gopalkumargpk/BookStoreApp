import React from 'react';
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              et totam. Tempore amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>

          <button className="btn mt-6 btn-secondary">Subscribe</button>
        </div>

        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="w-full h-auto" alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;