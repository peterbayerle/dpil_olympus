import React from 'react';
import Card from 'react-bootstrap/Card';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  };

  componentDidMount() {
    this.setTimer();
    var post = document.getElementById(`post${this.props.id}`);
    post.addEventListener('animationend', () => {
      if (post.classList.contains('hidden')) {
          post.style.display = 'none';
      }
    });
  };

  setTimer() {
    if (!this.props.question) {
      // hide after `timeUntilHide` milliseconds
      this._hideTimer = setTimeout(() => {
        this.setState({visible: false});
        this._hideTimer = null;
      }, this.props.timeHide);
    }
    
  };

  componentWillUnmount() {
    clearTimeout(this._showTimer);
    clearTimeout(this._hideTimer);

  };

  render() {
    return (
      <div id={`post${this.props.id}`} className={`Post ${!this.state.visible ? 'hidden' : ''}`}>
        <div className="pt-2">
          <Card border={this.props.question ? 'dark' : ''}>
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
