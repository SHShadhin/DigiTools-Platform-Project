import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([])
  }
  const handleRemove = (item) => {
    const filteredCard = carts.filter(i => i.id !== item.id)
    setCarts(filteredCard)
  }
  return (
    <div className="max-w-9/12 mx-auto rounded-2xl mb-20 bg-white border border-gray-300 p-10">
      <h2 className="text-3xl font-bold mb-5">Your Cart</h2>
      {carts.length === 0 ? (
        <div className="bg-base-100 md:p-20">
          <div className="text-center">
            <div className="flex justify-center">
              <p className='text-gray-400 font-bold'> 
                <CiShoppingCart size={100} />
              </p>
            </div>
            <h2 className="text-2xl text-gray-300">Cart is Empty</h2>
          </div>
        </div>
      ) : (
        <>
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
                  <h2 onClick={()=>handleRemove(item)} className="text-red-400 text-xl font-medium">Remove</h2>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <h2 className="text-3xl font-medium text-purple-500">Total</h2>
            <p className="text-2xl font-bold">${totalPrice}</p>
          </div>

          <button
            onClick={handlePayment}
            className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl w-full text-lg text-white mt-5"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;