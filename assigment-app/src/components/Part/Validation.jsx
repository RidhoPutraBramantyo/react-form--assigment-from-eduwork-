import React from "react";
const Input = ({ Label, type, name, onChange }) => {
  return (
    <div>
      <label>{Label}: </label>
      <br />
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
      <br />
    </div>
  );
};
class Validation extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

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
        <form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            name="email"
            Label="Email"
            onChange={(value) => this.setState({ email: value })}
          />
          <Input
            type="password"
            name="password"
            Label="Password"
            onChange={(value) => this.setState({ password: value })}
          />
          <br />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default Validation;
