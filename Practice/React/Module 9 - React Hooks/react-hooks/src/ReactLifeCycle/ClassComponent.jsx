import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update",prevState);
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    console.log("Render");
    return <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={() => {
            this.setState({count : this.state.count+1})
        }}>Add by 1</button>
    </div>;
  }
}
