// leaderboard.js
const initialState = {
  leaderboard: [],
};

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LEADERBOARD':
      return { ...state, leaderboard: action.leaderboard };
    default:
      return state;
  }
};

const updateLeaderboardAction = (leaderboard) => ({ type: 'UPDATE_LEADERBOARD', leaderboard });
