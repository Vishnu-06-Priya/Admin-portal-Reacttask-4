
import { useState } from 'react';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
    const [products, setProducts] =useState ([])
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true)
        let products = await axios.get("https://6296c83157b6258606132303.mockapi.io/products");
        console.log(products)
        setProducts(products.data)
        setLoading(false)
    }
    let productDelete = async (id) => {
        try {
            let ask = window.confirm("Are You Sure ? Do You Want to Delete this Data ")
            if (ask){
                await axios.delete(`https://6296c83157b6258606132303.mockapi.io/products/${id}`)
            loadData()  
            }
           
        } catch (error) {
            
        }
    }

    return (
        // <!-- Begin Page Content -->
        <div class="container-fluid">


            {/* <!-- Page Heading --> */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Products</h1>
                <Link to="/portal/create-product" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
            </div>

          
            {
                isLoading ? <div>
                    <div className="mx-auto" style={{ width:"200px"}}>
                        <div className="spinner-border text-info" role="status">
                          
                        </div>
                        <span className="visually-hidden"><h4>Loading...</h4></span>
                    </div>
               
         

                    </div> : <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>RAM</th>
                                    <th>ROM</th>
                                    <th>color</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>RAM</th>
                                    <th>ROM</th>
                                    <th>Color</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>


                                {products.map((product, index) => {
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.model}</td>
                                        <td>{product.price}</td>
                                        <td>{product.ram}</td>
                                        <td>{product.rom}</td>
                                        <td>{product.color}</td>
                                        <td>
                                            <Link to={`/portal/products/${product.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                            <Link to={`/portal/products/edit/${product.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                            <button onClick={() => productDelete (product.id)}  className="btn btn-sm btn-danger mr-2">Delete</button>
                                        </td>

                                    </tr>


                                })
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
}
        </div>
    )
}
export default Products;