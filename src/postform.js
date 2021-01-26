import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
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

export default PostForm;