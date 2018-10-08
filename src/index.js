import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// simple example of a conrolled input

class ControlledInput extends React.Component {
  state = { text: "" };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<ControlledInput />, document.getElementById("root"));
