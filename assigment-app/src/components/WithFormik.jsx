import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const WithFormik = () => {
  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{
          nama: "",
          jurusan: "",
          gender: "",
          alamat: "",
          member: false,
        }}
        validationSchema={Yup.object({
          nama: Yup.string().required("Nama wajib diisi"),
          jurusan: Yup.string().required("Jurusan wajib diisi"),
          gender: Yup.string().required("Jenis kelamin wajib diisi"),
          alamat: Yup.string().required("Alamat wajib diisi"),
        })}
        onSubmit={(values) => {
          // Di sini Anda dapat mengirimkan data pendaftaran ke server atau menampilkan hasil ke komponen lain.
          alert("Registrasi berhasil: " + JSON.stringify(values));
        }}
      >
        <Form>
          <div>
            <label>Nama:</label>
            <Field type="text" name="nama" />
            <ErrorMessage name="nama" component="div" className="error" />
          </div>

          <div>
            <label>Jurusan:</label>
            <Field as="select" name="jurusan">
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">
                Desain Komunikasi Visual
              </option>
            </Field>
            <ErrorMessage name="jurusan" component="div" className="error" />
          </div>

          <div>
            <label>Jenis Kelamin:</label>
            <Field type="radio" name="gender" value="Laki-Laki" /> Laki-laki
            <Field type="radio" name="gender" value="Perempuan" /> Perempuan
            <ErrorMessage name="gender" component="div" className="error" />
          </div>

          <div>
            <label>Alamat:</label>
            <Field as="textarea" name="alamat" />
            <ErrorMessage name="alamat" component="div" className="error" />
          </div>

          <div>
            <label>
              Member:
              <Field type="checkbox" name="member" />
            </label>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default WithFormik;
