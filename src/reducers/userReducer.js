const initialState =  {
  name: '',
  age: 0,
  address: ''
};

const userReducer = (state=initialState, action) => {
  switch(action.type) {
  case '':
    return {};

  default:
    return state;

  }
};

export default userReducer;
