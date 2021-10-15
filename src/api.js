// base API
const base_url = "https://api.rawg.io/api/";

// Date
const getCurrentDay = () => {
  let day = new Date().getDay();
  if (day < 10) day = "0" + day;
  return day;
};

const getMonth = () => {
  let month = new Date().getMonth();
  if (month < 10) month = "0" + month;
  return month;
};

const currentDay = getCurrentDay();
const currentMonth = getMonth();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//URLs
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//GAME DETAILS

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

export const searchGameURL = (game_name) =>
  `${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${game_name}&page_size=9`;
