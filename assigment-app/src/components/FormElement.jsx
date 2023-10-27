import React from "react";
import "../css/Form.css"; // Impor file CSS Anda

export default class FormElement extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Nama: ${this.state.nama} 
      Jurusan: ${this.state.jurusan} 
      Gender: ${this.state.gender} 
      Alamat: ${this.state.alamat} 
      Member: ${this.state.member ? "YES" : "NO"}`
    );
    this.setState({
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    });
  };

  render() {
    return (
      <div className="registration-form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Nama:{" "}
            <input
              type="text"
              name="nama"
              onChange={(e) =>
                this.setState({ nama: e.target.value }, () =>
                  console.log(this.state)
                )
              }
              defaultValue={this.props.nama}
            />
          </label>
          <br />
          <label>
            Jurusan:{" "}
            <select
              name="jurusan"
              onChange={(e) =>
                this.setState({ jurusan: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            >
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">
                Desain Komunikasi Visual
              </option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin:
            <input
              type="radio"
              value="Laki-Laki"
              name="gender"
              onChange={(e) =>
                this.setState({ gender: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            />
            Laki-laki
            <input
              type="radio"
              value="Perempuan"
              name="gender"
              onChange={(e) =>
                this.setState({ gender: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            />
            Perempuan{" "}
            <input
              type="radio"
              value="it's better not to tell"
              name="gender"
              onChange={(e) =>
                this.setState({ gender: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            />
            it's better not to tell
          </label>
          <br />
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            Alamat:
            <textarea
              cols="30"
              rows="10"
              name="alamat"
              onChange={(e) =>
                this.setState({ alamat: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            />
          </label>
          <br />
          <label>
            Member:{" "}
            <input
              type="checkbox"
              checked={this.state.member}
              name="member"
              onChange={(e) =>
                this.setState({ member: e.target.checked }, () =>
                  console.log(this.state)
                )
              }
            />
          </label>
          <br />
          <label>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </label>
        </form>
      </div>
    );
  }
}
