
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Kform({ formData, setFormData, page, setPage }) {
    const [selectedFile, setSelectedFile] = useState();
    const [isFileSelected, setisFileSelected] = useState(false);
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setisFileSelected(true);

    };

    const formikProps = {
        initialValues: {
            name: '',
            email: '',
            city: '',
            state: '',
            gender: '',
            phonenumber: '',
            adhar:'no',
            age:'<18'

        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .required('Sorry, this is required'),
            email: Yup
                .string()
                .required('Sorry, this is required').email(),
            gender: Yup
                .string()
                .required('Sorry, this is required'),
            city: Yup
                .string()
                .required('Sorry, this is required'),
            state: Yup
                .string()
                .required('Sorry, this is required'),
            phonenumber: Yup
                .string()
                .required('Sorry, this is required')
            

        }),
        onSubmit: values => {

            if(isFileSelected===false)
            alert("Please Upload Resume");

            if (page === 3) {
                alert("FORM SUBMITTED");
                console.log(formData);
            } else {

                setFormData({ name: values.name, email: values.email, city: values.city, state: values.state, gender: values.gender, phonenumber: values.phonenumber, filetype: selectedFile.type, filename: selectedFile.name, filesize: selectedFile.size, lmod: selectedFile.lastModifiedDate.toLocaleDateString(),adhar:values.adhar,age:values.age });
                setPage((currPage) => currPage + 1);
            }
        }
    }
    return (
        <Formik {...formikProps}>
            {formik => (
                <>

                    <div className="container">
                        <h5>Personal details</h5>
                        <div className="formcontainer">
                            <Form>
                                <div className='inputlabelbox'>
                                    <label htmlFor="name">Enter Name :</label>
                                    <Field name="name" type="text" className="form-control"
                                    />
                                    <ErrorMessage name="name" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="email">Enter E-mail :</label>
                                    <Field name="email" type="email" className="form-control" />

                                    <ErrorMessage name="email" />
                                </div>
                                <span className='inputlabelbox'>
                                    <label htmlFor="age">Select age:</label>
                                    <Field name="age" as="select">
                                        <option value="<18>">less than 18 years</option>
                                        <option value="18-50">18-50</option>
                                        <option value=">50>">50 years or more</option>
                                    </Field>
                                    <ErrorMessage name="age" /></span>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span >Gender :-&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span role="group" aria-labelledby="my-radio-group">
                                    <label>
                                        <Field type="radio" name="gender" value="male" />
                                        Male
                                    </label>
                                    <label>
                                        <Field type="radio" name="gender" value="female" />
                                        Female
                                    </label>
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                <ErrorMessage name="gender" />
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <label>
                                    <Field type="checkbox" name="adhar" value="yes" />
                                    Have Aadhar
                                </label>
                                <div className='inputlabelbox'>
                                    <label htmlFor="city">Enter City :</label>
                                    <Field name="city" type="text" className="form-control" size="small" />
                                    <ErrorMessage name="city" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="state">Enter State :</label>
                                    <Field name="state" type="text" className="form-control" />
                                    <ErrorMessage name="state" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="phonenumber">Enter Phone Number :</label>
                                    <Field name="phonenumber" type="text" className="form-control" />
                                    <ErrorMessage name="phonenumber" />
                                </div>
                                <div>
                                    <input type="file" name="file" onChange={changeHandler} />
                                    Upload Resume
                                    {/* <button onClick={handleSubmission}>Upload Resume</button> */}
                                </div>

                                <br></br>
                                <button
                                    disabled={page === 0}
                                    onClick={() => {
                                        setPage((currPage) => currPage - 1);
                                    }}
                                >
                                    Prev
                                </button>
                                <button type="submit"
                                >
                                    Next
                                </button>




                            </Form>
                        </div>
                    </div>
                </>
            )}
        </Formik>


    )

}

export default Kform;