import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function PostForm(props) {
  return (
    <Form onSubmit={props.onSubmit} className="pr-2">
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control
            placeholder="Was denkst du über dieses Thema?"
            id="formTextBox" 
            as="textarea" 
            rows={2} />
        </Form.Group>
        <Button id="submitButton" variant="primary" type="submit">
          Submit
        </Button>
      </Form.Row>
      
    </ Form>
  );
};

export default PostForm;