import { Outlet } from 'react-router-dom';
import './Main.css';
import Header from '../../components/Home/Header';
import Hero from '../../components/Home/Hero';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#F0F0D3" }}>
        <Header />
        <Hero />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
