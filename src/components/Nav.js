import React, { useState } from "react";
//styles
import styled from "styled-components";
//animations
import { motion } from "framer-motion";
import { fadeIn } from "../toolkit/scripts/animations.js";
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

  const searchGamesHandler = (e) => {
    e.preventDefault();
    dispatch(searchGamesAction(searchText));
    setSearchText("");
  };

  const clearSearched = () => {
    dispatch(clearGamesAction());
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="view">
      <StyledLogo>
        <img src={logo} alt="logo" onClick={clearSearched} />
        <h1 id="logo" onClick={clearSearched}>
          magnum.
        </h1>
      </StyledLogo>
      <form className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={searchGamesHandler}>Search</button>
      </form>
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;

  img {
    cursor: pointer;
  }
`;

export default Nav;
