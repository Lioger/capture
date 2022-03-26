import { useState } from "react";
import { motion } from 'framer-motion';

const Question = ({ question }) => {
  const [faqToggle, setFaqToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setFaqToggle(!faqToggle)} className="question">
      <motion.h4 layout>{question.title}</motion.h4>
      {faqToggle && <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, sequi.</p>
      </div>}
      <div className="faq-line" />
    </motion.div>
  );
};

export default Question;
