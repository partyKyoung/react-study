import React, { Component } from "react";

export default class ChildRef extends Component {
  constructor() {
    super();

    this.box = null;
  }

  handleScroll = () => {
    const { scrollHeight, clientHeight } = this.box;

    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid #000000",
      height: "300px",
      width: "300px",
      overflow: "scroll"
    };

    const innerStyle = {
      height: "600px",
      width: "100%",
      background: "linear-gradient(white, black)"
    };

    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
