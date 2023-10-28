import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/WithFormik.css";

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
          // Here you can send registration data to the server or display the result in another component.
          alert("Registration successful: " + JSON.stringify(values));
        }}
      >
        <Form className="registration-form">
          <div className="field-group">
            <label htmlFor="nama" className="field-label">
              Nama:
            </label>
            <Field type="text" id="nama" name="nama" className="field-input" />
            <ErrorMessage name="nama" component="div" className="error" />
          </div>

          <div className="field-group">
            <label htmlFor="jurusan" className="field-label">
              Jurusan:
            </label>
            <Field
              as="select"
              id="jurusan"
              name="jurusan"
              className="field-input"
            >
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">
                Desain Komunikasi Visual
              </option>
            </Field>
            <ErrorMessage name="jurusan" component="div" className="error" />
          </div>

          <div className="field-group">
            <label className="field-label">Jenis Kelamin:</label>
            <div>
              <label htmlFor="gender-laki" className="field-radio-label">
                <Field
                  type="radio"
                  id="gender-laki"
                  name="gender"
                  value="Laki-Laki"
                />{" "}
                Laki-laki
              </label>
              <label htmlFor="gender-perempuan" className="field-radio-label">
                <Field
                  type="radio"
                  id="gender-perempuan"
                  name="gender"
                  value="Perempuan"
                />{" "}
                Perempuan
              </label>
            </div>
            <ErrorMessage name="gender" component="div" className="error" />
          </div>

          <div className="field-group">
            <label htmlFor="alamat" className="field-label">
              Alamat:
            </label>
            <Field
              as="textarea"
              id="alamat"
              name="alamat"
              className="field-textarea"
            />
            <ErrorMessage name="alamat" component="div" className="error" />
          </div>

          <div className="field-group">
            <label className="field-checkbox-label">
              Member:
              <Field type="checkbox" name="member" />
            </label>
          </div>

          <div className="field-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default WithFormik;
