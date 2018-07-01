// update state when an actions happens
const initialState = {
  count: 0
};

const counterReducer = (state=initialState, action) => {
  switch(action.type) {
  case '':
    return {};

  default:
    return state;
  }
};

export default counterReducer;
