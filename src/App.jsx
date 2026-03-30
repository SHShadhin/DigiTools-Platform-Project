import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
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

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>


      <Tools toolsPromise={toolsPromise}></Tools>

      <Steps></Steps>
      <Price></Price>
      <Transform></Transform>
      <Footer></Footer>
      
    </>
  )
}

export default App
