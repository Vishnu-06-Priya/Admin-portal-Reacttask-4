import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function EditProduct() {
const params = useParams()
const navigate = useNavigate()
   const formik = useFormik({
        initialValues: {
            name: "",
            model: "",
            price: "",
            ram: "",
            rom: "",
            color: ""
        },
        validate: (values) => {
           let errors = {};

            if (values.name === "") {
                errors.name = "Please enter name";
            }

            if (values.model === "") {
                errors.model = "Please enter model name";
            }

            if (values.price === "") {
                errors.price = "please Enter Price";
            }


            if (values.ram === "") {
                errors.ram = "Please Enter Ram";
            }

            if (values.rom === "") {
                errors.rom = "Please Enter Rom";
            }

            if (values.color === "") {
                errors.color = "Please Enter Color";
            }


            return errors;

        },
        onSubmit: async (values) => {
         await axios.put(`https://6296c83157b6258606132303.mockapi.io/products/${params.id}`, values)
        navigate("/portal/products/")
        }
    });

    useEffect (() => {
        loadUser()
    }, [])

    let loadUser = async () => {
        try{
            let product = await axios.get(`https://6296c83157b6258606132303.mockapi.io/products/${params.id}`)
        formik.setValues({
            name : product.data.name,
            model : product.data.model,
             price : product.data.price,
            ram: product.data.ram,
            rom: product.data.rom,
            color: product.data.color,
        });
        }catch(error){
            
        }
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">

                        <div className="col-lg-6">
                            <label>Name</label>
                            <input className={`form-control ${formik.errors.name ? `input-error` : ``}`} type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" ></input>

                            <span style={{ color: "red" }}>{formik.errors.name}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Model</label>
                            <input className={`form-control ${formik.errors.model ? `input-error` : ``}`} type={"text"} value={formik.values.model} onChange={formik.handleChange} name="model"></input>

                            <span style={{ color: "red" }}>{formik.errors.model}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Price</label>
                            <input className={`form-control ${formik.errors.price ? `input-error` : ``}`} type={"text"} value={formik.values.price} onChange={formik.handleChange} name="price"></input>
                            <span style={{ color: "red" }}>{formik.errors.price}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Ram</label>
                            <input className={`form-control ${formik.errors.ram ? `input-error` : ``}`} type={"text"} value={formik.values.ram} onChange={formik.handleChange} name="ram"></input>
                            <span style={{ color: "red" }}>{formik.errors.ram}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Rom</label>
                            <input className={`form-control ${formik.errors.rom ? `input-error` : ``}`} type={"text"} value={formik.values.rom} onChange={formik.handleChange} name="rom"></input>
                            <span style={{ color: "red" }}>{formik.errors.rom}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Color</label>
                            <input className={`form-control ${formik.errors.color ? `input-error` : ``}`} type={"text"} value={formik.values.color} onChange={formik.handleChange} name="color"></input>

                            <span style={{ color: "red" }}>{formik.errors.color}</span>
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

export default EditProduct