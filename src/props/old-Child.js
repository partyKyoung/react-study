import React, { Component } from "react";
import PropTypes from "prop-types";

class Child extends Component {
  static propTypes = {
    singer: PropTypes.string,
    song: PropTypes.string.isRequired
  };

  static defaultProps = {
    singer: "Hoobastank",
    song: "Without A Fight"
  };

  render() {
    const { singer, song } = this.props;

    return (
      <div>
        지금 듣고 있는 노래는 {singer}의 {song}입니다.
      </div>
    );
  }
}

export default Child;
