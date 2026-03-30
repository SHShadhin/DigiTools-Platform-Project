import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToolsCard = ({ tool, carts, setCarts }) => {
  const [buyNow, setBuyNow] = useState(false);
  const handleBuyNow = () => {
    setBuyNow(true);
    setCarts([...carts,tool])
    toast('Item Added To Cart')
  };
  
  return (
    <div>
      <div className="card-body relative">
        <span className="badge badge-sm rounded-3xl badge-warning absolute md:top-4 md:right-5 top-3 right-4">
          {tool.tag}
        </span>
        <div className="mt-7 h-12 w-12 border border-gray-200 shadow-sm bg-white rounded-full p-3">
          <img className="w-full" src={tool.image} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-bold my-3"> {tool.name} </h2>
          <p>{tool.description}</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            {tool.price}
            <span className="text-2xl font-thin">/{tool.period}</span>
          </h2>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{tool.features[0]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{tool.features[1]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{tool.features[2]}</span>
          </li>
        </ul>
        <div className="mt-4">
          <button
            onClick={()=>handleBuyNow()}
            className={`btn rounded-3xl w-full text-white ${
              buyNow
                ? 'bg-green-500'
                : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'
            }`}
          >
            {buyNow ? 'Added in Cart' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;