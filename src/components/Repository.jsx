import styled from "styled-components";

const RepositorySection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Repository = (props) => {
  return <RepositorySection>{props.children}</RepositorySection>;
};

export default Repository;
