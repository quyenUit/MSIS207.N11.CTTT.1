import * as React from "react";

class MyInput extends React.Component {
  onChangr() {
    console.log("changed");
  }

  onBlur() {
    console.log("blured");
  }

  render() {
    return <input onChange={this.onChangr} onBlur={this.onBlur} />;
  }
}

export default MyInput;
