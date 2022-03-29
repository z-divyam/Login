import TextError from './TextError'
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import classes from './Forgot.module.css'

function Popup(props) {
    const initialValues={
      email:''
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
      return errors
    }
    console.log(FormData)
    return (
      <Modal
        {...props}
        centered
        size="sm"
      >
        <Modal.Header className={[ classes.Header ].join(' ') } closeButton>
        Forgot Password
        </Modal.Header>
        <Modal.Body className={[ classes.Body ].join(' ') }>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            <Form noValidate>
                <label>USER ID</label>
                <Field className={ [ classes.Field].join(' ') } type='email' name='email'/>
                <ErrorMessage name="email" component={TextError}/>
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

function Forgot() {
    const [modalShow, setModalShow] = useState(false);
  return (
     <> 
     <button className={[ classes.Forget].join(' ')} onClick={() => setModalShow(true)}>Forget Password?</button>
    <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
     </>
  )
}

export default Forgot