import React, { useRef, useState } from "react";
import styled from "styled-components";
import SearchURL from "/assets/Search.svg";

const SearchBox = styled.div`
  width: 40%;
  height: 60px;
  margin: 40px;
  border-radius: 8px;
  background-color: var(--main-background-color);
  
  color: #495566;

  position: absolute;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > img {
    width: 25px;
    margin: 12px;
  }
`

const InputBox = styled.input`
  display: block;
  height: 80%;
  width: calc(100% - 25px);
  border: 0;

  font-size: 1.1rem;
  color: white;

  background-color: var(--main-background-color);
`

const Input = ({ initialUser, onInputChange }) => {
  const [username, setUsername] = useState(initialUser);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current.blur();
      onInputChange(username);
    }
  }

  return (
    <SearchBox>
      <img src={SearchURL} />
      <InputBox
        ref={inputRef}
        type="text"
        value={username}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="username"
      />
    </SearchBox>
  );
};

export default Input;
