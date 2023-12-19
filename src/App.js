// App.js

import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import './App.css';
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';

const slides = [
  {
    img: image1,
    title: 'Image 1',
  },
  {
    img: image2,
    title: 'Image 2',
  },
  {
    img: image3,
    title: 'Image 3',
  },
  {
    img: image4,
    title: 'Image 4',
  },
  {
    img: image5,
    title: 'Image 5',
  },
];

function App() {
  // App.js

return (
  <div>
    <Navbar />
    <div className='text-center'>
      <div className="w-full h-28 flex flex-col justify-center items-center lg:gap-6">
        <h1 className="text-stone-800 text-3xl lg:text-6xl font-bold leading-10 whitespace-nowrap mb-4">
          Featured Products
        </h1>
        <h2 className="w-full text-stone-800 text-sm sm:text-lg lg:text-2xl font-normal leading-loose">
          Explore and discover a variety of products
        </h2>
      </div>
      <Carousel slides={slides} />
    </div>
  </div>
);

  
}




export default App;
