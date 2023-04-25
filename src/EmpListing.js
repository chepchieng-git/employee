import React, { useState, useEffect } from "react"


function EmpListing() {
    useEffect(() => {
        fetch("http://localhost:3000/employee")
            .then(res => res.json())
            .then((resp) => {
                console.log(resp)
            })
            .catch((err) => err.message)
    }, [])

    return (
        <div>
            <div className="container">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}
export default EmpListing