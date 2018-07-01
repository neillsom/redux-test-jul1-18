// update state when an actions happens
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT_COUNTER':
    return Object.assign({}, state, {
      count: state.count + action.data
    });

  // return {
  //   ...state,
  //   count: state.count + action.data
  //  }

  case 'DECREMENT_COUNTER':
    return Object.assign({}, state, {
      count: state.count - action.data
    });

  default:
    return state;
  }
};

export default counterReducer;
