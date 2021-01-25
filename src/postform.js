import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class PostForm extends React.Component {
  handleButtonClick = (event) => {
    event.preventDefault();
    window.parent.postMessage(
      { event_id: 'submitted post', contents: event.target[0].value },  '*'
    ); 
  };

  render() {
    return (
        <Form onSubmit={this.handleButtonClick}>
          <Form.Group>
            <Form.Label>Make post:</Form.Label>
            <Form.Control id="formTextBox" as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </ Form>
    );
  };

};

export default PostForm;
