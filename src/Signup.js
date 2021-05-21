import React,{useState} from 'react'
import {Formik, Form} from 'formik'; 
import Textfield from './Textfield';
import { Alert,  Button } from 'react-bootstrap';
import * as Yup from 'yup'
import AOS from 'aos'


function Signup() {
    AOS.init();
    const [check, setCheck] = useState(false);
    const validate = Yup.object({
        Name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Name is required'),
        Email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        Description: Yup.string()
        .min(20, 'Must be 20 characters or more')
        .required('required')
    })
    const handleclick = () => {
        setTimeout(() => {
            setCheck(true);
        }, 2000)
        
    }
    return (
        <Formik
            initialValues={{
                Name: '',
                Email: '',
                Description: ''
            }}
            validationSchema={validate}
            onSubmit={values =>
                console.alert('Submiited successfully')
            }
        >
            {formik => (
                <div className="container bg-info px-5 py-5" data-aos="fade-left" data-aos-offset="300">
                    <h1 className="my-4 fs-1 text-light"><strong>Let's talk.</strong></h1>
                    <Form className="text-light px-5 fs-5">
                        <Textfield style={{backgroundColor: "#39bbe3", border: "none"}} label="Name" name="name" type="text"/>
                        <Textfield style={{backgroundColor: "#39bbe3", border: "none"}} label="Email" name="email" type="email"/>
                        <Textfield style={{height: "160px", backgroundColor: "#39bbe3", border: "none"}}label="Description" name="description" type="text"/>
                        <Button className="mt-3"variant="outline-light" type="submit" onClick={handleclick}>Send inquiry!</Button>
                    </Form>
                    {
                        !check ? "" : <Alert variant='success'>
                        This is a successfully submit!
                      </Alert>
                      
                     }

                </div>
            )

            }
        </Formik>
            
        
    )
}

export default Signup
