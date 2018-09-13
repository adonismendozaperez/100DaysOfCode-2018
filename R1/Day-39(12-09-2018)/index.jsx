//Review Using Props with Stateless Functional Components
class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  
  class Camper extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <p>{this.props.name}</p>
      );
    }
  };
  Camper.propTypes = {name:PropTypes.string.isRequired};
  Camper.defaultProps = { name : "CamperBot"};

//Create a Stateful Component

class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "<h1>"
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

//Render State in the User Interface
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
         <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

//Set State with this.setState
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        name:"React Rocks!"
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

//Use State to Toggle an Element
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility(){
      if(this.state.visibility){
        return this.setState({
          visibility: false
        });
      }
      else{
        return this.setState({
          visibility: true
        });
      } 
    }

    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };

//Write a Simple Counter
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }

    increment(){
      this.setState({
        count: this.state.count + 1
      })
    }
  
    decrement(){
      this.setState({
        count: this.state.count - 1
      })
    }
  
    reset(){
      this.setState({
        count: 0
      })
    }

    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
  