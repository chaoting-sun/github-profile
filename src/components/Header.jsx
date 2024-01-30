import styled from "styled-components";

const HeaderSection = styled.div`
  width: 100%;
  gap: 2.5rem;

  & h1 {
    margin: 15px 12px 10px 12px;
    font-size: 2rem;
    font-weight: 500;
    color: white;
  }

  & p {
    margin: 10px 12px 10px 12px;
    color: #8f9baf;
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <h1>GitHub</h1>
      <p>How people build software.</p>
    </HeaderSection>
  );
};

export default Header;
