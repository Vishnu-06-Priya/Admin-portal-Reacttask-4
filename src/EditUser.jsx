import React from 'react'
import { useFormik } from 'formik';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


function EditUser() {

  const params = useParams()
  const navigate  = useNavigate()


    const formik = useFormik({
        initialValues: {
          name: "",
          position: "",
          office: "",
          age: "",
          startDate: "",
          salary: ""
        },
    validate : (values) => {
    let errors = {};
    
    if(values.name === "" ){
      errors.name = "Please Enter Username";
    }
    
    
    if(values.name.length < 5){
      errors.name = "Please Enter Username";
    }
    
    
    
    if(values.position === ""  ){
      errors.position = "Please Enter ";
    }
    
    if(values.office === ""  ){
      errors.office = "Enter Current Office Name ";
    }
    if(values.age === ""  ){
      errors.age = "Enter Your Age ";
    }
    
    
    if(values.startDate === ""  ){
      errors.startDate = "Joining Date";
    }
    if(values.salary === ""  ){
      errors.salary = "Type your Current Salary";
    }
    
    return errors;
    
    },
        onSubmit: async (values) => {
       await axios.put(`https://6296c83157b6258606132303.mockapi.io/anyusers/${params.id}`, values)
      navigate("/portal/users");
        }
    
    
      });
    
useEffect (() => {
  loadUser()
},[])

let loadUser = async () => {
  try{
    let user = await axios.get(`https://6296c83157b6258606132303.mockapi.io/anyusers/${params.id}`);
    formik.setValues({
         name: user.data.name ,
          position: user.data.position,
          office: user.data.office,
          age: user.data.age,
          startDate: user.data.startDate,
          salary: user.data.salary
    });

  }catch(error){

  }
}

      return (
        <>
          <div className='container'>
            <form onSubmit={formik.handleSubmit}>
              <div className='row'>
    
                <div className='col-lg-6'>
                  <label>UserName</label>
                  <input className = {`form-control ${formik.errors.name ?  `input-error` : ` ` }`}  type={"text"} value ={formik.values.name} onChange={formik.handleChange} name="name" />
                <span style = {{color:"red"}}>{ formik.errors.name}</span>
                </div>
    
                <div className="col-lg-6">
                  <label>Position</label>
                  <input className='form-control'
                    type={"text"}
    
                    value={formik.values.position}
                    onChange={formik.handleChange}
                    name="position"
                  />
                  <span style={{ color: 'red' }}>{formik.errors.position}</span>
                </div>
    
                <div className='col-lg-6'>
                  <label>Office</label>
                  <input className='form-control' type={"text"} value={formik.values.office} onChange={formik.handleChange} name="office" />
                  <span style = {{color:"red"}}> { formik.errors.office }</span>
                </div>
    
                <div className='col-lg-6'>
                  <label>Age</label>
                  <input className='form-control' type={"text"} value={formik.values.age} onChange={formik.handleChange} name="age" />
                  <span style = {{color:"red"}}> { formik.errors.age }</span>
                </div>
    
                <div className='col-lg-6'>
                  <label>Start Date</label>
                  <input className='form-control' type={"text"} value={formik.values.startDate} onChange={formik.handleChange} name="startDate" />
                  <span style = {{color:"red"}}> { formik.errors.startDate }</span>
                </div>
    
                <div className='col-lg-6'>
                  <label>Salary</label>
                  <input className='form-control' type={"text"} value={formik.values.salary} onChange={formik.handleChange} name="salary" />
                  <span style = {{color:"red"}}> { formik.errors.salary }</span>
                </div>
    
                <div className='col-lg-6'>
                  <input className='btn btn-primary mt-2' type={"submit"} values = "Submit"></input> 
    
    
                </div>
              </div>
            </form>
    
          </div>
        </>
      )
    }
    

export default EditUser;