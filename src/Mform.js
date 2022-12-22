import React, { useState } from "react";
import Kform from "./Kform";
import Hform from "./Hform";
import Jform from "./Jform";
import Nform from "./Nform";


function Mform() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        state: '',
        gender: '',
        phonenumber: '',
        schoolname: '',
        spassyear: '',
        collegename: '',
        cpassyear: '',
        engprof: '',
        collegecity: '',
        fname: '',
        mname: '',
        fprof: '',
        mprof: '',
        singlechild: '',
        fpnumber: '',
        filetype:'',
        filename:'',
        filesize:'',
        lmod:'',
        adhar:'no',
        marks:'no',
        age:'<18',
        board:'Cbse'
    });   
    const PageDisplay = () => {
        if (page === 0) {
            return <Kform formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        }
        else if (page === 1) {
            return <Hform formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        } else if(page===2){
            return <Jform formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
        }else
            return <Nform formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
    };

    return (
        <><div className="container">
            <div className="progressbar">
                <div className="insprogressbar"
                    style={{ width: page === 0 ? "0%" : page === 1 ? "33.34%" : page=== 2? "66.67%":"100%" }}
                ></div>
            </div>
            <div className="form-container">

                <div className="body">{PageDisplay()}</div>

            </div>
        </div></>
    );
}

export default Mform;