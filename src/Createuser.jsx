import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function CreateUser() {
  
const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: ""
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter name";
      }

      if (values.position === "") {
        errors.position = "Please enter Position";
      }
      if (values.office === "") {
        errors.office = "Please enter office";
      }
      if (values.age === "") {
        errors.age = "Please enter age";
      }
      if (values.startDate === "") {
        errors.startDate = "Please enter startDate";
      }

      if (values.salary === "") {
        errors.salary = "Please enter salary";
      }
      return errors;

    },
    onSubmit : async (values) => {
   let users = await axios.post("https://6296c83157b6258606132303.mockapi.io/anyusers", values);
   alert(" New User has created Done");
   navigate("/portal/users");


    }
  })
  return (
    <>
      <div className='container'>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">

            <div className="col-lg-6">
              <label>name</label>
              <input className={`form-control ${formik.errors.name ? `input-error` : ``}`} type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" ></input>
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>

            <div className="col-lg-6">
              <label>Position</label>
              <input className={`form-control ${formik.errors.position ? `input-error` : ``}`} type={"text"} value={formik.values.position} onChange={formik.handleChange} name="position"></input>
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            </div>

            <div className="col-lg-6">
              <label>Office</label>
              <input className={`form-control ${formik.errors.office ? `input-error` : ``}`} type={"text"} value={formik.values.office} onChange={formik.handleChange} name="office"></input>
              <span style={{ color: "red" }}>{formik.errors.office}</span>
            </div>

            <div className="col-lg-6">
              <label>Age</label>
              <input className={`form-control ${formik.errors.age ? `input-error` : ``}`} type={"text"} value={formik.values.age} onChange={formik.handleChange} name="age"></input>
             <span style={{ color: "red" }}>{formik.errors.age}</span>
            </div>

            <div className="col-lg-6">
              <label>Start Date</label>
              <input className={`form-control ${formik.errors.startDate ? `input-error` : ``}`} type={"text"} value={formik.values.startDate} onChange={formik.handleChange} name="startDate"></input>
             <span style={{ color: "red" }}>{formik.errors.startDate}</span>
            </div>

            <div className="col-lg-6">
              <label>Salary</label>
              <input className={`form-control ${formik.errors.salary ? `input-error` : ``}`} type={"text"} value={formik.values.salary} onChange={formik.handleChange} name="salary"></input>
              <span style={{ color: "red" }}>{formik.errors.salary}</span>
            </div>

            <div className="col-lg-6">
              <input className='btn btn-primary'
                type={"submit"}
                value="Submit" disabled={!formik.isValid} >
              </input>
            </div>

            <div>

            </div>

          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUser;