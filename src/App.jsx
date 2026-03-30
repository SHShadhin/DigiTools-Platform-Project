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
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>

      <div className="text-center my-5">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-xl w-1/2 mx-auto my-3">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="tabs tabs-box justify-center bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab('products')}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label="Cart"
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
      {activeTab === 'cart' && <Cart carts={carts}></Cart>}
      <Steps></Steps>
      <Price></Price>
      <Transform></Transform>
      <Footer></Footer>
    </>
  );
}

export default App
