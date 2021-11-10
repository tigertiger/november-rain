//control center
export const storeState = (initialState = { hp: 30, attack: 3, defense: 3, exp: 0}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

// export const stateControl = storeState();

// const fedPlant calls stateControl, stateControl calls storeState, and the argument passed into stateControl calls one of our functions from the factory, which each call changeState

//function factory
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};