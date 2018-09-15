//Optimize Re-Renders with shouldComponentUpdate
class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
      if (nextProps.value % 2 == 0){
        return true;
      }
    }
    componentWillReceiveProps(nextProps) {
      console.log('Receiving new props...');
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState({
        value: this.state.value + 1
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value}/>
        </div>
      );
    }
  };

// Bind 'this' to a Class Method
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemCount: 0
      };
      this.addItem = this.addItem.bind(this);
    }
    addItem() {
      this.setState({
        itemCount: this.state.itemCount + 1
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.addItem}>Click Me</button>
          <h1>Current Item Count: {this.state.itemCount}</h1>
        </div>
      );
    }
  };

//Introducing Inline Styles
class Colorful extends React.Component {
    render() {
      return (
        <div style={{ color: "red", fontSize:72}}>Big Red</div>
      );
    }
  };
  
//Add Inline Styles in React
const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
  }

  class Colorful extends React.Component {
    render() {
      return (
        <div style={styles}>Style Me!</div>
      );
    }
  };

// Use Advanced JavaScript in React Render Method
const inputStyle = {
    width: 235,
    margin: 5
  }
  
  class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      }
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt', 
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[this.state.randomIndex];
      return (
        <div>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle} /><br />
          <button onClick={this.ask}>
            Ask the Magic Eight Ball!
          </button><br />
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      );
    }
  };

//Render with an If/Else Condition
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }
    render() {
      if(this.state.display){
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
      }
      else{
      return (
           <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>  
      </div>
      );
      }
    }
  };

//Use && for a More Concise Conditional
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }
    render() {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
  };

//Use a Ternary Expression for Conditional Rendering

const inputStyle = {
    width: 235,
    margin: 5
  }
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      this.state = { input: '', userAge: ''}
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState({
        userAge: this.state.input
      });
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type="number"
            value={this.state.input}
            onChange={this.handleChange} /><br />
          {
             this.state.userAge.length > 0 ? (this.state.input < 18 ? buttonThree : buttonTwo) : buttonOne
          }
        </div>
      );
    }
  };

//Render Conditionally from Props
class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { fiftyFifty } = this.props;
      return (
        <h1>
        {
            fiftyFifty ? "You win!" : "you lose!"
        }
        </h1>
      )
    };
  };
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter + 1 
      });
    }
    render() {
      let expression = Math.random() > .5;
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression} />
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };

//Change Inline CSS Conditionally Based on Component State
class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value })
    }
    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      this.state.input.length > 15 && (inputStyle = {
        border: '3px solid red'})
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
      );
    }
  };

//Use Array.map() to Dynamically Render Elements
const textAreaStyles = {
    width: 235,
    margin: 5
  };
  
  class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput : '',
        toDoList : []
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
      const itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }
    render() {
      const items = this.state.toDoList.map((items) =>  <li>{items}</li>)
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder="Separate Items With Commas" /><br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>
            {items}
          </ul>
        </div>
      );
    }
  };

//Give Sibling Elements a Unique Key Attribute
const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = 
                    frontEndFrameworks.map((renderFrameworks) => 
                        <li key={renderFrameworks.toString()}>{renderFrameworks}</li>)
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };

//Use Array.filter() to Dynamically Filter an Array
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      }
    }
    render() {
      const usersOnline = this.state.users.filter(user => user.online);
      const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>);
      return (
         <div>
           <h1>Current Online Users:</h1>
           <ul>
             {renderOnline}
           </ul>
         </div>
      );
    }
  };