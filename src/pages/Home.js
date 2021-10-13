import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesActions } from "../redux/actions/gamesActions";
import { useLocation } from "react-router-dom";
//Styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  let { popular, upcoming, newGames } = useSelector((state) => state.games);
  let { pathname } = useLocation();
  let pathId = pathname.split("/")[2];
  console.log(popular, upcoming, newGames);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(gamesActions());
  }, [dispatch]);

  return (
    <StyledGamesList>
      <h2>Upcoming Games</h2>
      {pathId && <GameDetail />}
      <StyledGames>
        {upcoming.map((game) => {
          return (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          );
        })}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popular.map((game) => {
          return (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          );
        })}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((game) => {
          return (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          );
        })}
      </StyledGames>
    </StyledGamesList>
  );
};

const StyledGamesList = styled(motion.div)`
  h2 {
    padding: 3rem 0;
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;
`;

export default Home;
