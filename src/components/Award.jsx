import styled from 'styled-components';

const Award = ({ award }) => {
  return (
    <StyledAward>
      <h3>{award.title}</h3>
      <div className="line" />
      <p>{award.description}</p>
    </StyledAward>
  )
};

const StyledAward = styled.div`
  padding: 5rem;
  @media (max-width: 1300px) {
    padding: 3rem;
  }
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

export default Award;
