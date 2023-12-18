// App.js

import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
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
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <div className="pt-10 space-y-32 px-20 text-center">
        <div className="w-full h-28 flex-col justify-start items-center lg:gap-6 flex align-center">
          <h1 className="text-stone-800 text-3xl lg:text-6xl font-bold leading-10 whitespace-nowrap mb-4">
            Featured Products
          </h1>
          <h2 className="w-full text-center text-stone-800 text-sm sm:text-lg lg:text-2xl font-normal leading-loose">
            Explore and discover a variety of products
          </h2>
        </div>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}




export default App;
