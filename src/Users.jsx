import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get("https://6296c83157b6258606132303.mockapi.io/anyusers");
        console.log(users)
        setUsers(users.data)
        setLoading(false)
    }

let userDelete = async (userid) => {
    try {
        let ask = window.confirm("Are You Sure ? Do You Want to Delete this Data ")
        if (ask){
            await axios.delete(`https://6296c83157b6258606132303.mockapi.io/anyusers/${userid}`)
            loadData() 
        }
      
    } catch (error) {
        
    }
}

    return (
        <div class="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/portal/create-users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
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
                        <table
                            class="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellspacing="0"
                        >
                            <thead>
                                <tr>
                                    <th>Sl no</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Sl no</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>

                                {
                                    users.map((user, index) => {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.position}</td>
                                            <td>{user.office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.startDate}</td>
                                            <td>{user.salary}</td>
                                            <td>
                                                <Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                                <Link to={`/portal/users/edit/${user.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                                <button onClick={() => userDelete (user.id)}  className="btn btn-sm btn-danger mr-2"> Delete</button>
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



    );

}
export default Users;
