import * as React from "react";

const MyButton = ({ disabled, text }) => (
  <button disabled={disabled}>{text}</button>
);

MyButton.defaultProps = {
  text: "My Button",
  disabled: false,
};

// class MyButton extends React.Component {
//   render() {
//     // return <button>{this.props.children}</button>;

//     const { disable, text } = this.props;
//     return <button disabled={disable}>{text}</button>;
//   }
// }

export default MyButton;
