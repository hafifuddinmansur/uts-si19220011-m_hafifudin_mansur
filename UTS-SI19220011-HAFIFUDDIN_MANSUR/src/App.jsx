import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Tombol from './komponen/atoms/tombol';
import Navbar from './komponen/Navbar';
import Hero from './komponen/Hero';
import Section1 from './komponen/Section';
import Footer from './komponen/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Hero title="Cerita Mobile Legends." desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque recusandae et id adipisci. Dicta dolore officiis neque
      dolorum vel labore quasi dignissimos nobis inventore pariatur commodi necessitatibus, similique, esse tempore." src="http://getwallpapers.com/wallpaper/full/7/5/4/232708.jpg" />
      <Section1 title="Perusahaan  Yang Telah Bergabung" desc="Jelaskan Deskripsi"></Section1>
      <Footer></Footer>
    </>

  );
}

export default App
