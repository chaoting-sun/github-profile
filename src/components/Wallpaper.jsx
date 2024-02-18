import styled from "styled-components";

const WallImgContainer = styled.div`
  width: 100%;
  height: 280px;
`;

const WallImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const Wallpaper = ({ wallpaperURL, test }) => {
  console.log(test);
  return (
    <WallImgContainer>
      <WallImg src={wallpaperURL} />
    </WallImgContainer>
  );
};

export default Wallpaper;
