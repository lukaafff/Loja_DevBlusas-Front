import Cards from '../components/Cards/Cards';

import Carousel from '../components/Carousel/Carousel';

import Banner1 from '../images/banner_carrossel13.jpg';
import Banner2 from '../images//banner_carrossel14.jpg';
import Banner3 from '../images//banner_carrossel15.jpg';

const Vestidos = () => {
  const images = [
    { src: Banner1, alt: 'Banner 1' },
    { src: Banner2, alt: 'Banner 2' },
    { src: Banner3, alt: 'Banner 3' },
  ];
  return (
    <div>
      <Carousel data={images} />
      <Cards subId="vestidos" /> {/* Renderizar os cards com o sub ID "vestidos" */}
    </div>
  );
};

export default Vestidos;