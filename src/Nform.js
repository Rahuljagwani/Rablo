import { useNavigate } from 'react-router-dom';
import React from 'react';


function Nform({ formData, setFormData, page, setPage }) {
    
    let navigate = useNavigate();
    




   
    return (
        
        <>
            <div className='container'>Are you sure you want to Submit the Form??</div><br></br>
            <button
                disabled={page === 0}
                onClick={() => {
                    setPage((currPage) => currPage - 1);
                }}
            >
                Prev
            </button>
            <button type="submit" onClick={() => {
                    alert("FORM SUBMITTED");
                    console.log(formData);
                    navigate("/details", { state: formData });
                }}
            >
                {page === 3 ? "Submit" : "Next"}
            </button>
        </>


    )

}

export default Nform;