// Import icons
import home2 from '../img/home2.png';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
// Import styled components
import styled from 'styled-components';
import { Section, Description, Image } from '../styles';
// Animation
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services className="services" ref={element} variants={scrollReveal} animate={controls} initial="hidden">
      <Description>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Team" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Just a camera" />
      </Image>
    </Services>
  )
};

const Services = styled(Section)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    display: flex;
    align-items: center;
    img {
      margin-right: 1rem;
    }

    h3 {
      background-color: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
