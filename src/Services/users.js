import axios from "axios";

const mode = import.meta.env.VITE_MODE;
const baseURL =
  mode === "production" ? "https://api.github.com" : "http://localhost:3001";

const instance = axios.create({ baseURL: baseURL });

const createURL = (username, searchType) => {
  if (mode === "production" && searchType === "users") {
    return `users/${username}`
  } else if (mode === "production" && searchType === "repos") {
    return `users/${username}/repos`
  } else if (mode === "development" && searchType === "users") {
    return `users_${username}`
  } else {
    return `repos_${username}`
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
