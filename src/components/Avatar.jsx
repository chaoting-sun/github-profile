import styled from "styled-components";

const PhotoContainer = styled.div`
  width: 120px;
  height: 120px;
  border: 23px solid var(--main-background-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1035px) {
    align-self: start;
    margin-top: -50px;
  }
`;

const Photo = styled.img`
  width: 140px;
  height: 140px;
  background-color: black;
  border-radius: 7px;
`;

const Avatar = ({ avatarURL }) => {
  return (
    <PhotoContainer>
      <Photo src={avatarURL} />
    </PhotoContainer>
  );
};

export default Avatar;
