import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Products from './components/Products/Products'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Nav />
      <HeroSection  />
      <About />
      <Products />
      <Form />
      <Footer />
    </>
  )
}

export default App
