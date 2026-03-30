import React from 'react';

const Stats = () => {
  return (
    <div className="flex md:justify-between justify-center text-center items-center  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-8 md:py-18 md:px-100  text-white md:mb-20 mb-10">
      <div>
        <h2 className="md:text-4xl text-2xl font-bold md:mb-5">50K+</h2>
        <p>Active Users</p>
      </div>
      <div className="divider divider-horizontal"></div>
      <div>
        <h2 className="md:text-4xl text-2xl font-bold md:mb-5">200+</h2>
        <p>Premium Tools</p>
      </div>
      <div className="divider divider-horizontal"></div>
      <div>
        <h2 className="md:text-4xl text-2xl font-bold md:mb-5">4.9</h2>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default Stats;