import React from 'react';

const Transform = () => {
  return (
    <div className="flex  justify-center text-center items-center  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-15 md:py-25 px-5  text-white">
      <div className="space-y-4">
        <h2 className="md:text-4xl text-3xl font-bold">Ready to Transform Your Workflow</h2>
        <p>
          Join thousands of professionals who are already using Digitools to
          work smarter.<br></br> Start your free trial today.
        </p>
        <div className='mt-10'>
          <button className="btn bg-white rounded-3xl mr-4 text-[#9514FA]">
            Explore Products
          </button>
          <button className="btn btn-outline rounded-3xl">View Pricing</button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};
 
export default Transform;