import styled from "styled-components";

const Item = styled.div`
  background-color: #111629;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  gap: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.p`
  color: var(--profile-key-color);
  margin: 0;
`;

const Divider = styled.div`
  background-color: var(--profile-key-color);
  width: 1px;
  height: 2.7rem;
`;

const Value = styled.p`
  color: var(--title-color);
  height: fit-content;
  margin: 0;
`;

const ProfileCard = ({ itemKey, itemValue }) => {
  return (
    <Item>
      <Name>{itemKey}</Name>
      <Divider></Divider>
      <Value>{itemValue}</Value>
    </Item>
  );
};

export default ProfileCard;
