import React, { Component } from "react";
import Blockly from "blockly";
import "../BlocklyUtils/customBlock";
import { BlocklyWorkspace } from "react-blockly";

export default class CustomBlockly extends Component {
  state = {
    initialXML: "",
    // '<xml xmlns="https://developers.google.com/blockly/xml"><block type="generate_mixed_color" x="30" y="30"></block></xml>',
  };

  toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Custom",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "generate_mixed_color",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "generate_math_result",
          },
        ],
      },
    ],
  };

  workspaceDidChange = (workspace) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    this.props.setCode(code);
  };

  render() {
    return (
      <BlocklyWorkspace
        className="blockly-style"
        // you can use whatever classes are appropriate for your app's CSS
        toolboxConfiguration={this.toolboxCategories} // this must be a JSON toolbox definition
        initialXml={this.state.initialXML}
        onXmlChange={(data) => this.setState({ initialXML: data })}
        onWorkspaceChange={this.workspaceDidChange}
      />
    );
  }
}
