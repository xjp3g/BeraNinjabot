// game.js
const initialState = {
  coins: 0,
  energy: 100,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TAP':
      return { ...state, coins: state.coins + 1 };
    case 'ENERGY_REFILL':
      return { ...state, energy: 100 };
    default:
      return state;
  }
};

const tapAction = () => ({ type: 'TAP' });
const energyRefillAction = () => ({ type: 'ENERGY_REFILL' });
