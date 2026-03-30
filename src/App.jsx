import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Cart from './components/main/Cart'
import Tools from './components/main/Tools'
import NavBar from './components/Navbar'
import Price from './components/Price'
import Stats from './components/Stats'
import Steps from './components/Steps'
import Transform from './components/Transform'

const getTools = async () => {
  const res = await fetch('/tools.json');
  return res.json();
}
const toolsPromise = getTools();

function App() {
  const [activeTab, setActiveTab] = useState('products')
  const [carts, setCarts] = useState([])
  return (
    <>
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
      <Stats></Stats>

      <div className="text-center my-5">
        <h2 className="md:text-4xl text-3xl  font-bold">Premium Digital Tools</h2>
        <p className="text-xl md:w-1/2 mx-auto px-4 my-3">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="tabs tabs-box mt-5 bg-white border rounded-3xl border-gray-300 w-83 justify-center mx-auto py-1">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'
                : ''
            }`}
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab('products')}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 ${
              activeTab === 'cart'
                ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'
                : ''
            }`}
            aria-label={`Cart(${carts.length})`}
            onClick={() => setActiveTab('cart')}
          />
        </div>
      </div>

      {activeTab === 'products' && (
        <Tools
          toolsPromise={toolsPromise}
          carts={carts}
          setCarts={setCarts}
        ></Tools>
      )}
      {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}
      <Steps></Steps>
      <Price></Price>
      <Transform></Transform>
      <Footer></Footer>
    </>
  );
}

export default App
