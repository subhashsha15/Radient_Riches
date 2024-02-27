import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.scss'
import DealSection from '../src/sections/deals-section/DealSection'
import MainTopSection from './sections/main-top-section/MainTopSection'
import MainMiddleSection from './sections/main--middle-section/MainMiddleSection'

function App() {
  return (
    <>
      <Navbar />
      <MainTopSection/>
      <MainMiddleSection/>
      <DealSection />
      <Footer />
    </>
  )
}

export default App
