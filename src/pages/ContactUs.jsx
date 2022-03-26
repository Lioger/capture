// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from "../animation";
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ backgroundColor: '#fff' }}
    >
      <ScrollTop />
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>
            Get in touch.
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 4rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
