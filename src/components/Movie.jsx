import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import animations
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { fade, photoAnim, lineAnim } from "../animation";

const Movie = ({ movie }) => {
  const [element, controls] = useScroll();
  return (
    <StyledMovie ref={element} variants={fade} animate={controls} initial="hidden">
      <motion.h2 variants={fade}>{movie.title}</motion.h2>
      <motion.div variants={lineAnim} className="line" />
      <Link to={movie.url}>
        <Hide>
          <motion.img variants={photoAnim} src={movie.mainImg} alt={movie.title} />
        </Hide>
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    padding-bottom: 5rem;
    .line {
      margin-bottom: 2rem;
    }
    &:last-child {
      padding-bottom: 0;
      margin-bottom: -5px;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default Movie;
