import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesActions } from "../redux/actions/gamesActions";
import { useLocation } from "react-router-dom";
//Styles and animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../toolkit/scripts/animations.js";
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  let { popular, upcoming, newGames, searchedGames } = useSelector(
    (state) => state.games
  );
  let { pathname } = useLocation();
  let pathId = pathname.split("/")[2];
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(gamesActions());
  }, [dispatch]);

  return (
    <StyledGamesList variants={fadeIn} initial="hidden" animate="view">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searchedGames.length > 0 ? (
          <StyledGames>
            {searchedGames.map((game) => {
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
        ) : (
          <>
            <h2>Upcoming Games</h2>
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
          </>
        )}
      </AnimateSharedLayout>
    </StyledGamesList>
  );
};

const StyledGamesList = styled(motion.div)`
  h2 {
    padding: 3rem 0;

    @media screen and (max-width: 480px) {
      padding: 1rem 0;
      text-align: center;
    }
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export default Home;
