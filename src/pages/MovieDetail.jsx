import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
// Import data
import { getMovieState } from '../movieState';
// Import components
import Award from '../components/Award';
import ScrollTop from '../components/ScrollTop';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(getMovieState);
  const [movie, setMovie] = useState(movies.filter(movie => movie.url === location.pathname)[0]);
  
  return (
    <Details variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <ScrollTop />
      <Headline>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt={movie.title} />
      </Headline>
      <Awards>
        {movie.awards.map(award => (
          <Award award={award} key={award.title} />
        ))}
      </Awards>
      <ImageDisplay>
        <img src={movie.secondaryImg} alt="movie" />
      </ImageDisplay>
    </Details >
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 3rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
