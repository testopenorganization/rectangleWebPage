const redux = require('redux');
const createStore = redux.createStore;

const initialState= {
  counter : 0
};

//reducer
const reducer = (state = initialState, action) => {
if(action.type === 'ADD'){
  return{
    ...state,
    counter: state.counter + action.value
  };
};

if(action.type === 'SUB'){
  return{
    ...state,
    counter: state.counter - action.value
  };
};

}

//Store
const store = createStore(reducer);

//subscriber
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});


store.dispatch({
  type: 'ADD',
  value: 10
});
store.dispatch({
  type: 'SUB',
  value: 5
});
