import React, { Component } from "react";

import ChildRef from "./ChildRef";

export default class ParentRef extends Component {
  constructor() {
    super();

    this.scroll = null;
  }

  handleClick = () => {
    /* 
      컴포넌트가 처음 랜더링 될 때는 this.scroll 값이 undefined 이므로 메서드를 호출 할 때 오류가 발생한다. 

      화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 메서드를 실행하면 이미 한번 랜더링한 시점이므로 메서드 값을 읽어와서 실행하기 때문에 오류가 발생하지 않는다. 
    */

    this.scroll.handleScroll();
  };

  render() {
    return (
      <div>
        <ChildRef
          ref={ref => {
            this.scroll = ref;
          }}
        />
        <button type="button" onClick={this.handleClick}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
