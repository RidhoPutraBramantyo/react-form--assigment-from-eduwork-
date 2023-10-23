import React from "react";
import "../css/RegistrationForm.css";

export default class RegistrationForm extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };
  render() {
    return (
      <div
        style={{
          margin: "100px auto",
          border: "1px solid gray",
          padding: "20px",
        }}
      >
        <form className="form">
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
            <input type="radio" value="Laki-Laki" name="gender" />
            Laki-laki
            <input type="radio" value="Perempuan" name="gender" />
            Perempuan
          </label>
          <br />
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            Alamat:
            <textarea cols="30" rows="10" name="alamat" />
          </label>
          <br />
          <label>
            Member: <input type="checkbox" value={true} name="member" />
          </label>
          <br />
          <label>
            <button>Submit</button>
          </label>
        </form>
      </div>
    );
  }
}
