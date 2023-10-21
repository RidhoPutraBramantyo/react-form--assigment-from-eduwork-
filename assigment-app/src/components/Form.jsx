import React from "react";
import css from "./Form.css";

export default class FormElement extends React.Component {
  render() {
    return (
      <form>
        <p className="paragraf">
          <label>
            Nama: <input type="text" name="nama" />
          </label>
        </p>
        <p className="paragraf">
          <label>
            Jurusan:{" "}
            <select>
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">
                Desain Komunikasi Visual
              </option>
            </select>
          </label>
        </p>
        <p className="paragraf">
          <label>
            Jenis Kelamin:
            <input type="radio" value="Laki-Laki" name="gender" />
            Laki-laki
            <input type="radio" value="Perempuan" name="gender" />
            Perempuan
          </label>
        </p>
        <p className="paragraf">
          <label>
            Alamat: <textarea cols="30" rows="10"></textarea>
          </label>
        </p>
        <p className="paragraf">
          <label>
            Member: <input type="checkbox" value={true} />
          </label>
        </p>
      </form>
    );
  }
}
