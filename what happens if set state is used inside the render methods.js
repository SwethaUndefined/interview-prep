// what happens if set state is used inside the render methods

// Using setState inside the render method can lead to an infinite loop and performance issues in React.


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    render() {
      // BAD PRACTICE: Calling setState inside render
      this.setState({ count: this.state.count + 1 });
  
      return (
        <div>
          <p>Count: {this.state.count}</p>
        </div>
      );
    }
  }

  

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
  }
  

