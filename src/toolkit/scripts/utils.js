const smallImages = (imagePath, size) => {
  return imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("media/games", `media/resize/${size}/-/games`);
};

export default smallImages;
