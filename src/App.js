
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImageSlide from './components/ImageSlide';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';

function App() {
  return (
    <>
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlide/>
      <Footer/>
    </>
  );
}

export default App;
