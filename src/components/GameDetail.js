import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//Styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//utils
import smallImages from "../toolkit/scripts/utils";

const GameDetail = () => {
  let history = useHistory();
  const { details, screenshots, isLoading } = useSelector(
    (state) => state.details
  );

  const exitCardHandler = (e) => {
    if (e.target.classList.contains("card-shadow"))
      document.body.style.overflow = "auto";
    history.push("/");
  };

  return (
    <>
      {!isLoading && (
        <StyledCard className="card-shadow" onClick={exitCardHandler}>
          <StyledDetails>
            <StyledStats>
              <div className="rating">
                <h3>{details.name}</h3>
                <p>{details.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {details.platforms?.map((data) => (
                    <h4 key={data.platform.name}>{data.platform.name}</h4>
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img
                src={smallImages(details.background_image, 1280)}
                alt={details.name}
              />
            </StyledMedia>
            <StyledDescription>
              <p>{details.description_raw}</p>
            </StyledDescription>
            <div className="gallery">
              {screenshots.results?.map((screen) => (
                <img
                  src={smallImages(screen.image, 1280)}
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
  padding: 2rem;
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
