import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Nav from './components/navbar/nav'
import About from './components/about/About'
import Products from './components/Products/Products'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import { useRef } from 'react'


function App() {

    const about = useRef(null);
    const products = useRef(null);
    const form = useRef(null);

    const scroll = (elementRef:any) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      })
    };


  return (
    <>
      <Nav onClick={scroll} about={about} products={products} form={form} />
      <HeroSection  />
      <About about={about} />
      <Products products={products}/>
      <Form form={form}/>
      <Footer />
    </>
  )
}

export default App