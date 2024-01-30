import styled from "styled-components";

const FooterSection = styled.div`
  text-align: center;
  margin-bottom: 30px;

  & span {
    cursor: pointer;
    color: #94a0b3;
  }

  & span:hover {
    color: white;
  }
`;

const Footer = ({ viewAll, handleViewAll }) => {
  const footerText = viewAll
    ? "View few repositories"
    : "View all repositories";

  return (
    <FooterSection>
      <span onClick={handleViewAll}>{footerText}</span>
    </FooterSection>
  );
};

export default Footer;
