import styled from "styled-components";

const ProfileSection = styled.div`
  width: 100%;
  // background-color: red;
  display: flex;
  align-content: flex-start;
  align-items: flex-end;

  gap: 2.5rem;
`;

const Profile = (props) => {
  return <ProfileSection>{props.children}</ProfileSection>;
};

export default Profile;
