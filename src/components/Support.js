import {BsTelephoneFill} from 'react-icons/bs';
import classes from './Support.module.css'
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import TextError from './TextError';


function Popup(props) {
  const initialValues={
    email:'',
    problem:'',
    number:'',
    file:''
  }
  const onSubmit=values=>{
    console.log('FormData',values)
  }
  const validate=values=>{
    let errors={}
    
    if(!values.email){
      errors.email='This field is mandatory'
    }
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
      errors.email='Email Address is not a valid email address.'
    }
    else if(!/.com/i.test(values.email)){
      errors.email='Email Address is not a valid email address.'
    }
    if(!values.problem){
      errors.problem='This field is mandatory'
    }
    if(!values.number){
      errors.number='This field is mandatory'
    }
    else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.number)){
      errors.number='Phone no not valid'
    }
    return errors
  }
  console.log(FormData)
  return (
    <Modal
      {...props}
      size="s"
      centered
    >
      <Modal.Header className={[ classes.Header ].join(' ') } closeButton>
          Zenarate Support
      </Modal.Header>
      <Modal.Body className={[ classes.Body ].join(' ') }>
        <p>
        Sorry that you are having problems with the service.
        Please call us at 844.517.5272 or email us using the form below. 
        We will try to solve the problem as soon as possible.
        </p>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
          <Form noValidate>
              <label>Email Address</label>
              <label className={ [ classes.red].join(' ') } >*</label>
              <Field className={ [ classes.Field].join(' ') } type='email' name='email'/>
              <ErrorMessage name="email" component={TextError}/>
              <br/>
              <label>Please describe the problem</label>
              <label className={ [ classes.red].join(' ') } >*</label>
              <Field className={ [ classes.Field ].join(' ') } type='text' name='problem'/>
              <ErrorMessage name="problem" component={TextError}/>
              <br/>
              <label>Phone number for a call back</label>
              <label className={ [ classes.red].join(' ') } >*</label>
              <Field className={ [ classes.Field ].join(' ') } type='number' name='number'/>
              <ErrorMessage name="number" component={TextError}/>  
              <br/>
              <label>Please upload your file (optional)</label>
              <Field type="file" name="file"/>
              <hr/>
              <div className={ [ classes.Submit].join(' ') }><Button variant="primary" type="submit">Submit</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="primary" onClick={props.onHide}>Close</Button> </div>
          </Form>
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

function Support() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <button className={[ classes.PhoneImg ].join(' ') } onClick={() => setModalShow(true)}>
      <BsTelephoneFill/>
      </button>

      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Support

