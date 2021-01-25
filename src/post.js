import React from 'react';
import Card from 'react-bootstrap/Card';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  };

  componentDidMount() {
    this.setTimer();
  };

  setTimer() {
    // show after `timeBeforeShow` milliseconds
    this._showTimer = setTimeout(() => {
      this.setState({visible: true});
      this._showTimer = null;
    }, this.props.timeShow);

    // hide after `timeUntilHide` milliseconds
    this._hideTimer = setTimeout(() => {
      this.setState({visible: false});
      this._hideTimer = null;
    }, this.props.timeHide);
  };

  componentWillUnmount() {
    clearTimeout(this._showTimer);
    clearTimeout(this._hideTimer);

  };

  render() {
    return this.state.visible ? (
      <div className="Post">
        <div className="pt-2">
          <Card>
            <Card.Header><b>{this.props.user}</b></Card.Header>
            <Card.Body>
              <Card.Text>{this.props.text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    ) : null;
  };

};

export default Post;
