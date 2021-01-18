import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.timeOnCreation = Date.now();
    this.duration = props.duration
    this.state = {
      visible: true
    }
  };

  componentDidMount() {
    this.setTimer();
  };

  setTimer() {
    // clear any existing timer
    if (this._timer != null) {
      clearTimeout(this._timer)
    }

    // hide after `delay` milliseconds
    this._timer = setTimeout(() => {
      this.setState({visible: false});
      this._timer = null;
    }, this.props.delay);
  };

  componentWillUnmount() {
    clearTimeout(this._timer);
  };

  render() {
    return this.state.visible ? (
      <div className="Post">
        <Container className="w-50 pt-2">
          <Card>
            <Card.Header><b>{this.props.user}</b></Card.Header>
            <Card.Body>
              <Card.Text>{this.props.text}</Card.Text>
              <Card.Text>{this.timeOnCreation}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    ) : null;
  };

};

export default Post;
