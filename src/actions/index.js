// an action is an object with a type property. other values may be added known as Payload=data given to action
// { type : 'INCREMENT', count: 0,  etc}
// type describes the type of action, how / way we identify the action

// Action Creator = function that returns object
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const incrementCounter = (data) => {
  return {
    type: INCREMENT_COUNTER, // uniquely identify the action
    data
  };
};

const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const decrementCounter = (data) => {
  return {
    type: DECREMENT_COUNTER, // uniquely identify the action
    data
  };
};
