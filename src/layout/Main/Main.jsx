import { Outlet } from 'react-router-dom';
import './Main.css';
import Header from '../../components/Home/Header';
import Hero from '../../components/Home/Hero';

const Main = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#F0F0D3" }}>
        <Header />
        <Hero />
      </div>
      <Outlet />
    </div>
  )
}

export default Main
