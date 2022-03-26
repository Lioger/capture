// Page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import ScrollTop from '../components/ScrollTop';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div className="about-us" variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  )
};

export default AboutUs;
