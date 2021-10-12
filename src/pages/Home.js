import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesActions } from "../redux/actions/gamesActions";
//Styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//components
import Game from "../components/Game";

const Home = () => {
  let games = useSelector((state) => state.games);
  console.log(games);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(gamesActions());
  }, []);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
