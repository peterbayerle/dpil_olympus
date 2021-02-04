import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostForm(props) {
  return (
    <Form onSubmit={props.onSubmit} className="pt-3">
      <Form.Group>
        <Form.Label>What are your thoughts?
        </Form.Label>
        <Form.Control id="formTextBox" as="textarea" rows={2} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </ Form>
  );
};

export default PostForm;