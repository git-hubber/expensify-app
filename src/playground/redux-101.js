import { createStore } from  'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count = 1} = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log("State change:");
  console.log(store.getState());
});

store.dispatch(setCount({ count: 50 }));

store.dispatch(incrementCount( { incrementBy: 5 }));
store.dispatch(incrementCount( { incrementBy: 1 } ));

store.dispatch(decrementCount( { decrementBy: 5 } ));
store.dispatch(decrementCount( { decrementBy: 1 } ));

store.dispatch(resetCount( ));


unsubscribe();