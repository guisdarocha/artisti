import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Products from './components/Products/Products'


function App() {

  return (
    <>
      <Nav />
      <HeroSection  />
      <About />
      <Products />
    </>
  )
}

export default App
