import React from 'react';
import Card from 'react-bootstrap/Card';

class Post extends React.Component {
  componentDidMount() {
    this.setTimer();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.reusingPost) {
      this.props.timerRefreshed(this.props.idx);
      this.setTimer();
    }
  }

  setTimer() {
    if (this.props.duration) {
      this.hideTimer = setTimeout(() => {
        this.props.removePost(this.props.idx);
      }, this.props.duration*1000);
    }
  };

  componentWillUnmount() {
    clearTimeout(this.hideTimer);
  };

  render() {
    return (
      <div className="Post">
        <div className="pt-2">
          <Card border={this.props.bg} style={{visibility: this.props.text ? "visible" : "hidden"}}>
            <Card.Header><b>{this.props.user}</b></Card.Header>
            <Card.Body>
              <Card.Text>{this.props.text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  };

};

export default Post;
