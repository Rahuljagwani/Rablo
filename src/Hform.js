
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Hform({ formData, setFormData, page, setPage }) {
    


    const formikProps = {
        initialValues: {
            schoolname: '',
            spassyear: '',
            collegename: '',
            cpassyear: '',
            engprof: '',
            collegecity: '',
            marks:'no',
            board:'Cbse'
        },
        validationSchema: Yup.object({
            schoolname: Yup
                .string()
                .required('Sorry, this is required'),
            spassyear: Yup
                .string()
                .required('Sorry, this is required'),
            engprof: Yup
                .string()
                .required('Sorry, this is required'),
            collegename: Yup
                .string()
                .required('Sorry, this is required'),
            cpassyear: Yup
                .string()
                .required('Sorry, this is required'),
            collegecity: Yup
                .string()
                .required('Sorry, this is required')

        }),
        onSubmit: values => {
            if (page === 2) {
                alert("FORM SUBMITTED");
                console.log(formData);
            } else {
                setFormData({ ...formData, schoolname:values.schoolname, spassyear:values.spassyear,collegename:values.collegename,cpassyear:values.cpassyear,engprof:values.engprof,collegecity:values.collegecity,marks:values.marks,board:values.board});
                setPage((currPage) => currPage + 1);
            }
        }
    }
    return (
        <Formik {...formikProps}>
            {formik => (
                <>

                    <div className="container">
                        <h5>Academic details</h5>
                        <div className="formcontainer">
                            <Form>
                                <div className='inputlabelbox'>
                                    <label htmlFor="schoolname">Enter schoolname :</label>
                                    <Field name="schoolname" type="text" className="form-control" />
                                    <ErrorMessage name="schoolname" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="spassyear">Enter School Passing year :</label>
                                    <Field name="spassyear" type="spassyear" className="form-control" />

                                    <ErrorMessage name="spassyear" />
                                </div>
                                <span className='inputlabelbox'>
                                    <label htmlFor="board">Select Board:</label>
                                    <Field name="board" as="select">
                                        <option value="Cbse">Cbse</option>
                                        <option value="Icse">Icse</option>
                                        <option value="State">State board</option>
                                    </Field>
                                    <ErrorMessage name="age" /></span>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span >Are you proficient in English:-&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <ErrorMessage name="engprof" />
                                <span role="group" aria-labelledby="my-radio-group">
                                    <label>
                                        <Field type="radio" name="engprof" value="yes" />
                                        yes
                                    </label>
                                    <label>
                                        <Field type="radio" name="engprof" value="no" />
                                        no
                                    </label>
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <label>
                                    <Field type="checkbox" name="marks" value="yes" />
                                    Marks above 90% 
                                </label>
                               
                                

                                <div className='inputlabelbox'>
                                    <label htmlFor="collegename">Enter collegename :</label>
                                    <Field name="collegename" type="text" className="form-control" size="small" />
                                    <ErrorMessage name="collegename" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="cpassyear">Enter College Passing year :</label>
                                    <Field name="cpassyear" type="text" className="form-control" />
                                    <ErrorMessage name="cpassyear" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="collegecity">Enter City of your college :</label>
                                    <Field name="collegecity" type="text" className="form-control" />
                                    <ErrorMessage name="collegecity" />
                                </div>
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

export default Hform;