import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Details(authorized) {
    console.log(authorized);
    const {state} = useLocation();
    if (!authorized) {
       return( <Navigate to="/" replace />)
    }
    return (

        <><div className="container" style={{ width:"80%" }}>
            <h3 style={{ textAlign:"center" }}>DETAILS</h3>
        <hr></hr>
        <h5 style={{ textAlign:"center" }}>Personal details</h5>
        <hr></hr>
        <b>Name:&nbsp;&nbsp;</b><span>{state.name}</span><br/>
        <b>E-mail:&nbsp;&nbsp;</b><span>{state.email}</span><br/>
        <b>City:&nbsp;&nbsp;</b><span>{state.city}</span><br/>
        <b>State:&nbsp;&nbsp;</b><span>{state.state}</span><br/>
        <b>Gender:&nbsp;&nbsp;</b><span>{state.gender}</span><br/>
        <b>Age:&nbsp;&nbsp;</b><span>{state.age}</span><br/>
        <b>Have Aadhar:&nbsp;&nbsp;</b><span>{state.adhar}</span><br/>
        <b>Phone Number:&nbsp;&nbsp;</b><span>{state.phonenumber}</span><br/>
        <hr></hr>
        <h5 style={{ textAlign:"center" }}>Academic Details</h5>
        <hr></hr>
        <b>School Name:&nbsp;&nbsp;</b><span>{state.schoolname}</span><br/>
        <b>Passing year(School):&nbsp;&nbsp;</b><span>{state.spassyear}</span><br/>
        <b>Board:&nbsp;&nbsp;</b><span>{state.board}</span><br/>
        <b>marks Above 90%:&nbsp;&nbsp;</b><span>{state.marks}</span><br/>
        <b>College name:&nbsp;&nbsp;</b><span>{state.collegename}</span><br/>
        <b>Passing year(College):&nbsp;&nbsp;</b><span>{state.cpassyear}</span><br/>
        <b>Proficient in English:&nbsp;&nbsp;</b><span>{state.engprof}</span><br/>
        <hr></hr>
        <h5 style={{ textAlign:"center" }}>Family Details</h5>
        <hr></hr>
        <b>Father's Name:&nbsp;&nbsp;</b><span>{state.fname}</span><br/>
        <b>Mother's Name:&nbsp;&nbsp;</b><span>{state.mname}</span><br/>
        <b>Father's Profession:&nbsp;&nbsp;</b><span>{state.fprof}</span><br/>
        <b>Mother's Profession:&nbsp;&nbsp;</b><span>{state.mprof}</span><br/>
        <b>Single Child:&nbsp;&nbsp;</b><span>{state.schild}</span><br/>
        <b>Father's Phone Number:&nbsp;&nbsp;</b><span>{state.fpnumber}</span><br/>
        <hr></hr>
        <h5 style={{ textAlign:"center" }}>Uploaded File Details</h5>
        <hr></hr>
        <b>File Type:&nbsp;&nbsp;</b><span>{state.filetype}</span><br/>
        <b>File Name:&nbsp;&nbsp;</b><span>{state.filename}</span><br/>
        <b>File Size:&nbsp;&nbsp;</b><span>{state.filesize}</span><br/>
        <b>Last Modified:&nbsp;&nbsp;</b><span>{state.lmod}</span><br/>
        </div>
        </>
    )
}
export default Details;