//Write a React Component from Scratch
class MyComponent extends React.Component {
    render() {
        return (
        <div>
            <h1>My First React Component!</h1>
        </div>
        );
    }
};
  ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))

//React: Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is:{props.date} </p>
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()} />
        </div>
      );
    }
  };

//Pass an Array as Props
const List= (props) => {
    const ChildComponent = <p>{props.tasks.join(', ')}</p>
    return ChildComponent;
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["walk with my girl", "work","talks with my friends"]}/>
        </div>
      );
    }
  };

//Use Default Props
const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
};
ShoppingCart.defaultProps = {items:0}

//Override Default Props
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items quantity={10} />
    }
};

//Use PropTypes to Define the Props You Expect
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
  
Items.propTypes = {
    quantity: PropTypes.number.isRequired
};
  
Items.defaultProps = {
    quantity: 0
};
  
class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
};

// Access Props Using this.props
class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <div>
              <p>Your temporary password is:<strong>{this.props.tempPassword}</strong></p>
          </div>
      );
    }
  };
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            <ReturnTempPassword tempPassword={"12345678"}/>
          </div>
      );
    }
  };
