import Cards from '../components/Cards/Cards';

import Carousel from '../components/Carousel/Carousel';

import Banner1 from '../images/banner_carrossel7.jpg';
import Banner2 from '../images/banner_carrossel8.jpg';
import Banner3 from '../images//banner_carrossel9.jpg';

const Camiseta = () => {
  const images = [
    { src: Banner1, alt: 'Banner 1' },
    { src: Banner2, alt: 'Banner 2' },
    { src: Banner3, alt: 'Banner 3' },
  ];
  return (
    <div>
      <Carousel data={images} />
      <Cards subId="camisetas" /> {/* Renderizar os cards com o sub ID "camisetas" */}
    </div>
  );
};

export default Camiseta;