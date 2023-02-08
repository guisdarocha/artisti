import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Nav from './components/navbar/nav'
import About from './components/about/About'
import Products from './components/Products/Products'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import { useRef } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'


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
      <ParallaxProvider>
      <Nav onClick={scroll} about={about} products={products} form={form} />
      <HeroSection  />
      <About about={about} />
      <Products onClick={scroll} products={products}  form={form}/>
      <Form form={form} selected={''} disabled={''}/>
      <Footer />
      </ParallaxProvider>
    </>
  )
}

export default App