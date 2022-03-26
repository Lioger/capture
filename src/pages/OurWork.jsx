import styled from 'styled-components';
import Movie from '../components/Movie';
import ScrollTop from '../components/ScrollTop';
// Import data
import { getMovieState } from '../movieState';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, slider, sliderContainer } from "../animation";

const OurWork = () => {
  const movies = getMovieState();

  return (
    <Work
      className="our-work"
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ backgroundColor: '#fff' }}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      {movies.map(movie => <Movie key={movie.url} movie={movie} />)}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
  }
`;

// Frame animations
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurWork;
