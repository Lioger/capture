import { motion } from "framer-motion";
import Wave from "./Wave";
// Import images
import home1 from "../img/home1.png";
// Import styled components
import { Section, Description, Image, Hide } from "../styles";
// Animations
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <Section className="about">
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or vigeography ideas that you have. We
          have professonals with amazing skills.
        </motion.p>
        <motion.a
          className="button"
          variants={fade}
          href="mailto:nickstepanovdev@gmail.com"
        >
          Contact Us
        </motion.a>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </Image>
      <Wave />
    </Section>
  );
};

export default AboutSection;
