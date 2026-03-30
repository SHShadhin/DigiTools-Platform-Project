import React from 'react';
import userImg from '/user.png'
import rocketImg from '/rocket.png'
import packageImg from '/package.png'
const Steps = () => {
  return (
    <div className="bg-[#F9FAFC] ">
      <div className="text-center">
        <h2 className="md:text-4xl pt-15 text-3xl font-bold mb-4">
          Get Started in 3 Steps
        </h2>
        <p className="pb-7">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="card  grid md:grid-cols-3 grid-cols-1 max-w-9/12 mx-auto md:gap-8">
        <div className="card transition-all duration-300 hover:scale-102 hover:shadow-lg hover:bg-green-100 pb-10 md:mb-20 mb-10 rounded-2xl bg-base-100 shadow-sm relative">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center absolute top-4 right-4 text-white">
            <p>01</p>
          </div>
          <div className="flex justify-center mt-6">
            <div className="bg-gray-300 h-24 w-24 rounded-full overflow-hidden flex items-center justify-center mt-10">
              <img className=" object-cover" src={userImg} alt="user" />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="card transition-all duration-300 hover:scale-102 hover:shadow-lg hover:bg-green-100 pb-10 md:mb-20 mb-10 rounded-2xl bg-base-100 shadow-sm relative">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center absolute top-4 right-4 text-white">
            <p>02</p>
          </div>
          <div className="flex justify-center mt-6">
            <div className="bg-gray-300 h-24 w-24 rounded-full overflow-hidden flex items-center justify-center mt-10">
              <img className=" object-cover" src={packageImg} alt="user" />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Choose Products</h2>
            <p>Browse our catalog and select the tools that fit your needs.</p>
          </div>
        </div>
        <div className="card transition-all duration-300 hover:scale-102 hover:shadow-lg hover:bg-green-100 pb-10 md:mb-20 mb-10 rounded-2xl bg-base-100 shadow-sm relative">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center absolute top-4 right-4 text-white">
            <p>03</p>
          </div>
          <div className="flex justify-center mt-6">
            <div className="bg-gray-300 h-24 w-24 rounded-full overflow-hidden flex items-center justify-center mt-10">
              <img className=" object-cover" src={rocketImg} alt="user" />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Start Creating</h2>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;