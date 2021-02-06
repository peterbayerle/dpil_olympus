import React from 'react';
import Post from './post';
import Container from 'react-bootstrap/Container';
import { posts } from './posts.json';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  };

  componentDidMount() {
    // add posts     
    for (var i=0; i<posts.length; i++) {
      (function(i) {
        this.showTimer = setTimeout(() => {
          this.addPost(i, posts[i]);
        }, posts[i].timeShow*1000);
      }).bind(this)(i);
    }
  };

  addPost(key, post) {
    post.id = key;
    post.key = key;
    var newPosts = this.state.posts;
    newPosts.push(post);
    this.setState({posts: newPosts});

    this.numPosts++;
  }

  handlePostSubmission(event) {
    event.preventDefault();
    var contents = event.target[0].value;

    // add new post
    var post = {
      user: 'You',
      text: contents,
      timeshow: 0,
      timeHide: 10000
    };

    this.addPost(this.numPosts, post);
    
    // post message for parent of frame to recieve
    window.parent.postMessage(
      { event_id: 'submitted post', contents: contents },  '*'
    ); 

  };

  render() {
    return (
      <Container className="App w-50 pt-3">
        <h1 id="olympusTitle" className="text-center">🏛 Olympus</h1>
        <Post 
          question={true}
          user={'Question asker'}
          text={'what do you think about this issue?'}
        />
        { this.state.posts.map((data) => {
          return (
            <Post {...data} />
          );
        }) }
        { /* <PostForm onSubmit={this.handlePostSubmission.bind(this)}/> */ }
      </Container>
    );
  };
};

export default App;
