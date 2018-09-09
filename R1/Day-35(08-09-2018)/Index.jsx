//Create a Complex JSX Element
const JSX = 
<div>
    <h1></h1>
    <p></p>
    <ul>
        <li>Hello</li>
        <li>Im</li>
        <li>Adonis</li>
    </ul>
</div>

//Create a Stateless Functional Component
const MyComponent = function() {
  return (
  <div>Hi</div>
  );
}

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
    return(
      <div>
        <h1> Hello React!</h1>
      </div>
    );
    }
  };