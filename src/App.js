import "./App.css";
import React, { Component } from "react";
import CustomBlockly from "./Components/CustomBlockly";
import mix from "mix-css-color";
import { Button } from "react-bootstrap";

export default class App extends Component {
  state = {
    blocklyCode: "",
    color: "purple",
    answer: null,
  };

  setCode = (blocklyCode) => this.setState({ blocklyCode });

  mixedColor = (colorOne, colorTwo) => {
    const color = mix(colorOne, colorTwo).hex;
    return this.setState({ color });
  };

  calculate = (first_number, operation, second_number) => {
    const answer = eval(`${first_number} ${operation} ${second_number}`);
    console.log(answer);
    return this.setState({ answer });
  };

  showResult = () => {
    try {
      eval(this.state.blocklyCode);
    } catch (error) {
      console.log(error);
    }
    console.log(this.state.blocklyCode);
  };

  render() {
    return (
      <div className="App m-auto">
        <CustomBlockly setCode={this.setCode} />
        <Button className="m-3" variant="warning" onClick={this.showResult}>
          Run
        </Button>
        <div
          style={{
            width: 200,
            height: 200,
            color: "white",
            borderRadius: "20%",
            backgroundColor: this.state.color,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            {this.state.color !== "purple" &&
              `Mixed BG Color is ${this.state.color}`}
          </p>
          <p>
            {this.state.answer !== null && `The answer is ${this.state.answer}`}{" "}
          </p>
        </div>
      </div>
    );
  }
}
