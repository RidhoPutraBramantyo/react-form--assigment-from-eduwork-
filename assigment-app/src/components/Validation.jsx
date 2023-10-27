import React from "react";
const Input = ({ Label, type, name }) => {
  return (
    <div>
      <label htmlFor="">{Label}: </label>
      <br />
      <input type={type} name={name} />
      <br />
    </div>
  );
};
class Validation extends React.Component {
  render() {
    const style = {
      width: "400px",
      margin: "100px auto 0",
      border: "1px solid black",
      padding: "10px",
    };

    return (
      <div style={style}>
        <h4>Login Page</h4>
        <form>
          <Input type="text" name="username" Label="Username" onChange />
          <Input type="password" name="password" Label="Password" />
          <br />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default Validation;
