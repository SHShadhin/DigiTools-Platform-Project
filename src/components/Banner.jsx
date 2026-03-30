import React from 'react';
import bannerImg from '../assets/banner.png';
import rectangleImg from '/Group 5.png'
const Banner = () => {
  return (
    <div className="max-w-9/12 mx-auto md:my-20 my-10 flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
      <div className="md:w-1/2 space-y-5">
        <button className="btn bg-[#E1E7FF] text-[#9514FA] rounded-3xl">
          {' '}
          <img src={rectangleImg} alt="" />
          New: AI-Powered Tools Available
        </button>
        <h2 className="text-[#101727] text-3xl md:text-6xl font-bold">
          Supercharge Your Digital Workflow
        </h2>
        <p className="md:text-xl text-lg  text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div>
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white mr-4 rounded-3xl">
            Explore Products
          </button>
          <button className="btn btn-outline text-[#9514FA] rounded-3xl">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;