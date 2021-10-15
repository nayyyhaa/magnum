import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//Styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//utils
import smallImages from "../toolkit/scripts/utils";
//images
import playstation from "../toolkit/assets/img/playstation.svg";
import steam from "../toolkit/assets/img/steam.svg";
import xbox from "../toolkit/assets/img/xbox.svg";
import nintendo from "../toolkit/assets/img/nintendo.svg";
import apple from "../toolkit/assets/img/apple.svg";
import gamepad from "../toolkit/assets/img/gamepad.svg";
//Star Images
import starEmpty from "../toolkit/assets/img/star-empty.png";
import starFull from "../toolkit/assets/img/star-full.png";

const GameDetail = ({ pathId }) => {
  let history = useHistory();
  const { details, screenshots, isLoading } = useSelector(
    (state) => state.details
  );

  const exitCardHandler = (e) => {
    if (e.target.classList.contains("card-shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //star rating
  const getStarRating = (rating) => {
    let stars = [];
    rating = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (rating > i) stars.push(<img alt="star" key={i} src={starFull}></img>);
      else stars.push(<img alt="star" key={i} src={starEmpty}></img>);
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <StyledCard className="card-shadow" onClick={exitCardHandler}>
          <StyledDetails layoutId={pathId}>
            <StyledStats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId.toString()}`}>
                  {details.name}
                </motion.h3>
                <p>{details.rating}</p>
                {getStarRating(details.rating)}
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {details.platforms?.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                      key={data.platform.name}
                      title={data.platform.name}
                    />
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <motion.img
                layoutId={`img ${pathId.toString()}`}
                src={smallImages(details.background_image, 640)}
                alt={details.name}
              />
            </StyledMedia>
            <StyledDescription>
              <p>{details.description_raw}</p>
            </StyledDescription>
            <div className="gallery">
              {screenshots.results?.map((screen) => (
                <img
                  src={smallImages(screen.image, 640)}
                  key={screen.id}
                  alt="screenshot"
                />
              ))}
            </div>
          </StyledDetails>
        </StyledCard>
      )}
    </>
  );
};

const StyledCard = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  padding: 0 2rem;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  img {
    width: 100%;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c99df1;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledDetails = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const StyledInfo = styled(motion.div)`
  text-align: center;
`;
const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
