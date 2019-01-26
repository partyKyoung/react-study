import * as React from "react";

interface ChildProps {
  singer: string;
  song: string;
}

interface ChildState {}

class Child extends React.Component<ChildProps, ChildState> {
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
