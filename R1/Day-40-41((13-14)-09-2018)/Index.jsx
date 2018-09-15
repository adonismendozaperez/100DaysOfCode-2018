//Create a Controlled Input
class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
       this.setState({
           input:event.target.value
        });
    }

    render() {
      return (
        <div>
          <input type="text" value={this.state.input} onChange={this.handleChange}  />
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

//Create a Controlled Form
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault();
      this.setState({
        submit: this.state.input
      });
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.input} onChange={this.handleChange} />
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  };

//Pass State as Props to Child Components
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           <Navbar name={this.state.name} />
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        <h1>Hello, my name is:{this.props.name} </h1>
      </div>
      );
    }
  };

//Pass a Callback as Props
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          <GetInput input =  {this.state.inputValue} handleChange = {this.handleChange }/>
          <RenderInput input={this.state.inputValue} />
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    handleChange(){
  
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };

/**
 *  the Lifecycle Method 
 
    componentWillMount()
    componentDidMount()
    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    componentDidUpdate()
    componentWillUnmount()
 */
/**
 * componentWillMount()= method is called before the render() method 
 * when a component is being mounted to the DOM.
 */
//Use the Lifecycle Method componentDidMount
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout( () => {
        this.setState({
          activeUsers: 1273
        });
      }, 3000);
    }
    render() {
      return (
        <div>
          <h1>Active Users: { this.state.activeUsers }</h1>
        </div>
      );
    }
  };

//  Add Event Listeners
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
      document.removeEventListener("keydown",this.handleKeyPress);
    }
    
    handleEnter() {
      this.setState({
        message: this.state.message + 'You pressed the enter key! '
      });
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };

//Manage Updates with Lifecycle Methods
class Dialog extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillUpdate() {
      console.log('Component is about to update...');
    }

    componentWillReceiveProps(nextProps){
      console.log(this.props);
      console.log(nextProps(nextProps));
    }
    componentDidUpdate() {
      console.log('Component has updated');
    }

    render() {
      return <h1>{this.props.message}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'First Message'
      };
      this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage() {
      this.setState({
        message: 'Second Message'
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.changeMessage}>Update</button>
          <Dialog message={this.state.message}/>
        </div>
      );
    }
  };