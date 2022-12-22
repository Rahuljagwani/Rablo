
import React  from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Jform({ formData, setFormData, page, setPage }) {
    


    const formikProps = {
        initialValues: {
            fname: '',
            mname: '',
            fprof: '',
            mprof: '',
            schild: '',
            fpnumber: ''
        },
        validationSchema: Yup.object({
            fname: Yup
                .string()
                .required('Sorry, this is required'),
            mname: Yup
                .string()
                .required('Sorry, this is required'),
            schild: Yup
                .string()
                .required('Sorry, this is required'),
            fprof: Yup
                .string()
                .required('Sorry, this is required'),
            mprof: Yup
                .string()
                .required('Sorry, this is required'),
            fpnumber: Yup
                .string()
                .required('Sorry, this is required')

        }),
        onSubmit: values => {
            
            if (page === 3) {
                alert("FORM SUBMITTED");
                
            } else {
                setFormData({...formData,fname:values.fname, mname:values.mname,schild:values.schild,fprof:values.fprof,mprof:values.mprof,fpnumber:values.fpnumber});
                setPage((currPage) => currPage + 1);
            }
        }
    }
    return (
        <Formik {...formikProps}>
            {formik => (
                <>

                    <div className="container">
                        <h5>Family details</h5>
                        <div className="formcontainer">
                            <Form>
                                <div className='inputlabelbox'>
                                    <label htmlFor="fname">Enter Father's Name :</label>
                                    <Field name="fname" type="text" className="form-control" />
                                    <ErrorMessage name="fname" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="mname">Enter Mother's Name :</label>
                                    <Field name="mname" type="mname" className="form-control" />

                                    <ErrorMessage name="mname" />
                                </div>
                        
                                <span >Are you single child?&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span role="group" aria-labelledby="my-radio-group">
                                    <label>
                                        <Field type="radio" name="schild" value="yes" />
                                        yes
                                    </label>
                                    <label>
                                        <Field type="radio" name="schild" value="no" />
                                        no
                                    </label>
                                </span>

                                <div className='inputlabelbox'>
                                    <label htmlFor="fprof">Enter Father's Profession :</label>
                                    <Field name="fprof" type="text" className="form-control" size="small" />
                                    <ErrorMessage name="fprof" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="mprof">Enter Mother's Profession :</label>
                                    <Field name="mprof" type="text" className="form-control" />
                                    <ErrorMessage name="mprof" /></div>
                                <div className='inputlabelbox'>
                                    <label htmlFor="fpnumber">Enter Father's Phone Number :</label>
                                    <Field name="fpnumber" type="text" className="form-control" />
                                    <ErrorMessage name="fpnumber" />
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

export default Jform;