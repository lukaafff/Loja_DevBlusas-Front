import React from 'react';
import Carousel from '../Carousel/Carousel';

const CarouselPage = ({ images }) => {
  return (
    <div>
      <Carousel data={images} />
    </div>
  );
};

export default CarouselPage;
