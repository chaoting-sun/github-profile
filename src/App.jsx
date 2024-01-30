import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Wallpaper from "./components/Wallpaper";
import Avatar from "./components/Avatar";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Repository from "./components/Repository";
import RepositoryCard from "./components/RepositoryCard";
import Footer from "./components/Footer";
import Input from "./components/Input";
import { wallpaperURL } from "../public/assets";

import { searchUser, searchRepositories } from "./Services/users";

import "./App.css";

const Main = styled.div`
  width: 75%;
  min-width: 420px;
  margin: -50px auto 30px auto;
  border-right: 60px solid transparent;
  border-left: 60px solid transparent;
  position: relative;

  @media (max-width: 1035px) {
    margin: 0rem 1rem 2rem 1rem;
  }
`;

const ProfileCardContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-content: space-between;
  flex-wrap: wrap;

  gap: 30px;

  @media (max-width: 1035px) {
    margin-top: 30px;
  }
`;

const App = () => {
  const [username, setUsername] = useState("chaoting-sun");
  const [repositories, setRepositories] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [userInfo, setUserInfo] = useState({
    avatar_url: null,
    followers: null,
    following: null,
    location: null,
    avatarUrl: null,
  });

  const SearchByUsername = (user) => {
    setUsername(user);
  };

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  useEffect(() => {
    searchUser(username).then((info) => {
      if (info) {
        console.log("info:", info);
        const userInfo = {
          followers: info.followers,
          following: info.following,
          location: info.location,
          avatarUrl: info.avatar_url,
        };
        console.log("userinfo:", userInfo);
        setUserInfo(userInfo);
      }
    });
  }, [username]);

  useEffect(() => {
    searchRepositories(username).then((repo) => {
      if (repo) {
        const repoInfo = repo.map((item) => ({
          name: item.name,
          license: item.license ? item.license.name.split(" ")[0] : null,
          stars: item.stargazers_count,
          forks: item.forks_count,
          description: item.description,
          updatedAt: item.updated_at,
          htmlUrl: item.html_url,
        }));
        setRepositories(repoInfo);
      }
    });
  }, [username]);

  const handleVisitRepository = (repoIndex) => {
    window.location.href = repositories[repoIndex].htmlUrl;
  };

  // console.log(username);
  // console.log(userInfo);
  // console.log(repositories);

  const getRepositoryCards = () => {
    const lastIndex = viewAll ? repositories.length : 4;
    return repositories
      .slice(0, lastIndex)
      .map((repo, index) => (
        <RepositoryCard
          key={index}
          repoIndex={index}
          repo={repo}
          handleClickCard={handleVisitRepository}
        />
      ));
  };

  return (
    <>
      <Input onInputChange={SearchByUsername} />
      <Wallpaper wallpaperURL={wallpaperURL} />
      <Main>
        <Profile>
          <Avatar avatarURL={userInfo.avatarUrl} />
          <ProfileCardContainer>
            <ProfileCard
              itemKey="Followers"
              itemValue={userInfo.followers}
            ></ProfileCard>
            <ProfileCard
              itemKey="Following"
              itemValue={userInfo.followers}
            ></ProfileCard>
            <ProfileCard
              itemKey="Location"
              itemValue={userInfo.location}
            ></ProfileCard>
          </ProfileCardContainer>
        </Profile>
        <Header />
        <Repository>{getRepositoryCards()}</Repository>
      </Main>
      <Footer viewAll={viewAll} handleViewAll={handleViewAll} />
    </>
  );
};

export default App;
