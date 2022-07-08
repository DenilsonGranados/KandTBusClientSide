import React from 'react';
import { Form, Container, Button, Modal} from "react-bootstrap";
import { useState } from 'react';


function Email() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit =event=>{
      let email= document.getElementById("email").value;
      let company= document.getElementById("org").value;
      let phone_number= document.getElementById("phone number").value;
      let description= document.getElementById("description").value;
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email,
          company:company,
          phone_number:phone_number,
          description:description
        })
      };   
      fetch('https://uu5rpb62rc.execute-api.us-east-1.amazonaws.com/prod/query', requestOptions)
      .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }else if (response.ok){
            setShow(false);
          }
      })
      .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
    }
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
          Get a Quote!
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" id="email"></Form.Control>
                <Form.Label>Company/Organization</Form.Label>
                <Form.Control id="org"></Form.Control>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control id="phone number"></Form.Control>
                <Form.Label>How Can We Help?</Form.Label>
                <Form.Control id="description" as="textarea" rows={3} />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </>

  )
}

export default Email;