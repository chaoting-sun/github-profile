import axios from "axios";

const productionMode = import.meta.env.PROD;

console.log("Mode:", productionMode ? "production" : "development");

const baseURL = productionMode
  ? "https://api.github.com"
  : "http://localhost:3001";

const instance = axios.create({ baseURL: baseURL });

const createURL = (username, searchType) => {
  if (productionMode && searchType === "users") {
    return `users/${username}`;
  } else if (productionMode && searchType === "repos") {
    return `users/${username}/repos`;
  } else if (!productionMode && searchType === "users") {
    return `users_${username}`;
  } else {
    return `repos_${username}`;
  }
};

const searchUser = async (username) => {
  const res = await instance.get(createURL(username, "users"));
  return res.data;
};

const searchRepositories = async (username) => {
  const res = await instance.get(createURL(username, "repos"));
  return res.data;
};

export { searchUser, searchRepositories };
