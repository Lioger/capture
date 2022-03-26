import styled from 'styled-components';
import { Section } from '../styles'; 
import Question from './Question';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  const questions = [
    { id: 1, title: 'How Do I Start?' },
    { id: 2, title: 'What products do you offer?' },
    { id: 3, title: 'Daily Schedule' },
    { id: 4, title: 'Different Payment Methods' },
  ]
  return (
    <Faq className="faq" ref={element} variants={scrollReveal} animate={controls} initial='hidden'>
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        {questions.map((question => <Question key={question.id} question={question} />))}
      </AnimateSharedLayout>
    </Faq>
  )
};

const Faq = styled(Section)`
  display: block;

  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
