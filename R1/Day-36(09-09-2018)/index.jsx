// Create a Component with Composition
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          <ChildComponent/>
        </div>
      );
    }
  };

//Use React to Render Nested Components
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
      <TypesOfFruit/>
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits/>
        </div>
      );
    }
  };

//Compose React Components
class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h2>Fruits:</h2>
            <NonCitrus/>
            <Citrus/>
        </div>
        );
    }
};
  
class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h1>Types of Food:</h1>
            <Fruits/>
            <Vegetables />
        </div>
        );
    }
};

//Render a Class Component to the DOM
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits/>
          <Vegetables/>
        </div>
      );
    }
  };
ReactDOM.render(<TypesOfFood/>,document.getElementById("challenge-node"))