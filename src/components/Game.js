import React from "react";
import { useDispatch } from "react-redux";
import { detailsAction } from "../redux/actions/detailsAction";
import { Link } from "react-router-dom";
//Styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { popUp } from "../toolkit/scripts/animations.js";
//utils
import smallImages from "../toolkit/scripts/utils";

const Game = ({ id, name, released, image }) => {
  let dispatch = useDispatch();

  const loadGameDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(detailsAction(id));
  };
  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="view"
      layoutId={id.toString()}
      onClick={loadGameDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.img
          layoutId={`img ${id.toString()}`}
          src={smallImages(image, 640)}
          alt={name}
        />
        <motion.h3 layoutId={`title ${id.toString()}`}>{name}</motion.h3>
        <p>{released}</p>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
