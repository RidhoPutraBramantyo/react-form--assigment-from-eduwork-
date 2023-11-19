import React from "react";
import Validation from "./Validation";

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <div>
        <Validation />
        {/* <FormElement
          nama="Ridho"
          gender="Laki-Laki"
          alamat="Jl. M. Upa Block E5 no.2"
        /> */}
      </div>
    );
  }
}
