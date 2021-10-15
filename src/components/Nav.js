import React, { useState } from "react";
//styles
import styled from "styled-components";
//animations
import { motion } from "framer-motion";
//redux

import { useDispatch } from "react-redux";
import {
  searchGamesAction,
  clearGamesAction,
} from "../redux/actions/gamesActions";
import logo from "../toolkit/assets/img/logo.svg";

const Nav = () => {
  let [searchText, setSearchText] = useState("");
  let dispatch = useDispatch();

  const searchGamesHandler = () => {
    dispatch(searchGamesAction(searchText));
    setSearchText("");
  };

  const clearSearched = () => {
    dispatch(clearGamesAction());
  };

  return (
    <StyledNav>
      <StyledLogo>
        <img src={logo} alt="logo" onClick={clearSearched} />
        <h1 id="logo" onClick={clearSearched}>
          magnum.
        </h1>
      </StyledLogo>
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={searchGamesHandler}>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  .search {
    input {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;

  img {
    cursor: pointer;
  }
`;

export default Nav;
