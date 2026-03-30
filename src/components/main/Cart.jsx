import React from 'react';

const Cart = ({ carts }) => {
  console.log(carts)
  return (
    <div className="max-w-9/12 mx-auto rounded-2xl mb-20 bg-white border border-gray-200 p-10">
      <h2 className="text-3xl font-bold mb-5">Your Cart</h2>
      {carts.map(item => (
        <div key={item.id}>
          <div className="flex justify-between items-center border border-gray-400 bg-gray-100 p-7 rounded-2xl mb-5">
            <div className="flex gap-5 items-center">
              <div className="h-12 w-12 border border-gray-200 shadow-sm bg-white rounded-full p-3">
                <img src={item.image} alt="" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-medium">{item.name}</h2>
                <p>${item.price}</p>
              </div>
            </div>
            <div>
              <h2 className="text-red-400 text-xl font-medium">Remove</h2>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between">
        <h2 className="text-3xl font-medium text-purple-500">Total</h2>
        <p className="text-2xl font-bold">$0</p>
      </div>
    </div>
  );
};

export default Cart;