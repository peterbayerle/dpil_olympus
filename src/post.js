import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      pressedLike: false,
      likeCount: 0
    }
  };

  componentDidMount() {
    this.setState({likeCount: this.props.likeCount});
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
      }, this.props.timeHide*1000);
    }
    
  };

  componentWillUnmount() {
    clearTimeout(this._hideTimer);
  };

  pressLike() {
    if (!this.state.pressedLike) {
      this.setState({likeCount: this.state.likeCount+1, pressedLike: true});
    } else {
      this.setState({likeCount: this.state.likeCount-1, pressedLike: false});
    }
    
  };

  get postClasses() {
    var className = 'Post ';
    className += !this.state.visible ? 'hidden ' : ' ' ;
    className += this.props.timeShow && this.state.visible ? 'added ' : ' ';
    className += this.props.question ? 'question' : ' ';
    return className;
  };

  render() {
    return (
      <div 
        id={`post${this.props.id}`} 
        className={this.postClasses}>
          <div className={!this.props.question ? 'pt-1' : ''}>
          <Card className={this.props.question ? 'border-red' : ''}>
            <Card.Header>
              {this.props.profile_picture ? 
              <img className="rounded-circle profilePicture" src={this.props.profile_picture} alt="profile"></img> 
              : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-patch-question profilePicture" viewBox="0 0 16 16">
                  <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z"/>
                  <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>
                </svg>}
              
              <span className="pl-2 name"><b>{this.props.user}</b></span>
              { this.props.likeCount ? 
              <div className="float-right pt-1">
                <svg onClick={()=>{this.pressLike()}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={this.state.pressedLike ? "#4493D4" : "black"} className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                </svg> 
                <span className="countText"> {this.state.likeCount} likes </span>
              </div> : null }
            </Card.Header>
            <Card.Body>
              <p className="card-text">{this.props.text}</p>
            </Card.Body>
          </Card>
          </div>
      </div>
    );
  };

};

export default Post;
