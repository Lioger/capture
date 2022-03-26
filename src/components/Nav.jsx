import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: 0 }}
            animate={{
              width: pathname === '/about' || pathname === '/' ? '50%' : '0'
            }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === '/work' ? '50%' : '0' }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === '/contact' ? '50%' : '0' }}
          />
        </li>
      </ul>
    </StyledNav>
  )
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  color: white;
  background-color: #282828;
  z-index: 10;
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0;
    #logo {
      display: inline-block;
      padding: 1rem;
    }
    ul {
      padding: 2rem 0 1rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0;
  }
`;

export default Nav;
