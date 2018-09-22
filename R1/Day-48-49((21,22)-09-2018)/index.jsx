//Getting Started with React Redux
class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          input: '',
          messages: []
        };
    }
    render() {
      return <div />
    }
  };

//Manage State Locally First
class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange=this.handleChange.bind(this)
      this.submitMessage=this.submitMessage.bind(this)
    }
  
  handleChange(e){
    this.setState({input:e.target.value})
  }
  
  submitMessage(){
    this.setState(({messages})=>({messages:messages.concat(this.state.input)}))
    this.setState({input:""})
  }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
            <input onChange={this.handleChange}
                   value={this.state.input}>
            </input>
            <button onClick={this.submitMessage}>
            Add Message
            </button>
            <ul>
            {this.state.messages.map(message=> (<li>{message}</li>))}
            </ul>
        </div>
      );
    }
  };

//Extract State Logic to Redux
const ADD = 'ADD';
function addMessage(message) {
  return {
    type: ADD,
    message: message
  };
};

function messageReducer (previousState, action) {
  return [...previousState, action.message];
}

let store = {
  state: [],
  getState: () => store.state,
  dispatch: (action) => {
    if (action.type === ADD) {
      store.state = messageReducer(store.state, action);
    }
  }
};

//Use Provider to Connect Redux to React
const ADD = 'ADD';
const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

class AppWrapper extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const Provider = ReactRedux.Provider;
        return(
            <Provider store={store}>
                <DisplayMessages />
            </Provider>
        );
    }
};

// Map State to Props
const state = [];
var mapStateToProps = (state) => ({messages: state});

//Map Dispatch to Props
const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  const mapDispatchToProps = (dispatch) => { 
    return { 
        submitNewMessage: function (message) { dispatch (addMessage (message)); } 
    } 
  };