import React from "react";
import { useDispatch } from "react-redux";
import { detailsAction } from "../redux/actions/detailsAction";
import { Link } from "react-router-dom";
//Styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ id, name, released, image }) => {
  let dispatch = useDispatch();

  const loadGameDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(detailsAction(id));
  };
  return (
    <StyledGame onClick={loadGameDetailsHandler}>
      <Link to={`/game/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
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
