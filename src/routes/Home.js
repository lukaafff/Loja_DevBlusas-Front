import './Home.css';
import Cards from '../components/Cards/Cards';

import Carousel from '../components/Carousel/Carousel';

import Banner1 from '../images/banner_carrossel.png';
import Banner2 from '../images/banner_carrossel2.jpg';
import Banner3 from '../images//banner_carrossel3.jpg';

const Home = () => {
  const images = [
    { src: Banner1, alt: 'Banner 1' },
    { src: Banner2, alt: 'Banner 2' },
    { src: Banner3, alt: 'Banner 3' },
  ];
  return (
    <div>
      <Carousel data={images} />
      <Cards categoria="" /> {/* Passando subId vazio */}
    </div>
  );
};


export default Home;