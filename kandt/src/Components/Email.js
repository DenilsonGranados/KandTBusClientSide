import React from 'react';
import { Form, Container} from "react-bootstrap"
function Email() {
  return (
      <Container>
        <Form>
            <Form.Label>Your Email</Form.Label>
            <Form.Control id="email" ></Form.Control>
        </Form>
      </Container>

  )
}

export default Email