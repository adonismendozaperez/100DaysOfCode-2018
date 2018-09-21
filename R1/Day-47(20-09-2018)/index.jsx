//Register a Store Listener
/*
 * Another method you have access to on the Redux store
 * object is store.subscribe(). This allows you to subscribe 
 * listener functions to the store, which are called whenever 
 * an action is dispatched against the store. One simple use for 
 * this method is to subscribe a function to your store that simply 
 * logs a message every time an action is received and the store is updated.
 */
const ADD = 'ADD';
const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
let count = 0;

store.subscribe( () => count +=1 )

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

//Combine Multiple Reducers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  auth: authReducer,
  count: counterReducer
});

const store = Redux.createStore(rootReducer);

//Send Action Data to the Store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE : 
      return state = action.text;
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      console.log('req!!')
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

store.subscribe(()=>{
  console.log(store.getState())
})

//Write a Counter with Redux
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT'; 

const counterReducer = (state = 0, action) => {
  switch(action.type){
    case INCREMENT: 
        return state + 1;
        break;
    case DECREMENT : 
        return state -1;
        break;
    default: 
        return state;
  }  
}; 

const incAction = () => {
  return {
    type : INCREMENT
  }
}; 

const decAction = () => {  
  return {
    type: DECREMENT
  }  
}; 

const store = Redux.createStore(counterReducer);

//Never Mutate State
const ADD_TO_DO = 'ADD_TO_DO';
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

//Use the Spread Operator on Arrays
const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        return [...state, action.todo];
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);

  //Remove an Item from an Array
  const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
       return state.filter(item=> item != state[action.index])
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);

  //Copy an Object with Object.assign
  const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        return Object.assign({}, state ,  {status: 'online'})
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);