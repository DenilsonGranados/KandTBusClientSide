import React from 'react';
import { Form, Container, Button, Modal} from "react-bootstrap";
import { useState } from 'react';


function Email() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit =event=>{
      let email= document.getElementById("email");
      let company= document.getElementById("org");
      let phone_number= document.getElementById("phone number");
      let description= document.getElementById("description");
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email,
          company:company,
          phone_number:phone_number,
          description:description
        })
      };   
      console.log(requestOptions)
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