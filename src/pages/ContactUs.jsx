// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <ScrollTop />
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>
            Steps to the best performance.
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>
              Send an email to{" "}
              <a href="mailto:nickstepanovdev@gmail.com">
                nickstepanovdev@gmail.com
              </a>{" "}
              📮
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>We will discuss all the details 📃</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Wait some time ⏳</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Enjoy your awesome website ✨</h2>
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
  color: #353535;
  h2 {
    font-size: 3rem;
  }
  @media (max-width: 1300px) {
    margin-top: 4rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 1rem 2rem;
    font-size: 2.4rem;

    a {
      padding-bottom: 2px;
      font-size: inherit;
      border-bottom: 3px solid #353535;
    }
  }
`;

export default ContactUs;
