import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmpDetail() {
    const { empid } = useParams()
    const [empData, empDataChange] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/employee/" + empid)
            .then(res => res.json())
            .then((resp) => {
                empDataChange(resp)
            })
            .catch((err) => err.message)
    }, [])

    return (
        <div className="card" style={{ "textAlign": "left" }}>
            {/* bind the individual information */}
            <h2>The Employee Name : <b>{empData.name}</b> ({empData.id})</h2>
            <h3>Contact Details</h3>
            <h5>Email: {empData.email}</h5>
            <h5>Phone: {empData.phone}</h5>
            <Link className="btn btn-danger" to={"/"}>Back to Listing</Link>
        </div>
    )
}
export default EmpDetail