import React from 'react';
import Post from './post';
import Header from './header';
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import { question, posts } from './posts.json';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  };

  componentDidMount() {
    this.startSimulation();
  };

  startSimulation() {
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
      <>
        <Header></Header>
        <Container className="App">
          <div className="pt-1">
            <Post
              question={true}
              {...question}
            />
          </div>
          
          <div className="posts">
            { this.state.posts.map((data) => {
              return (
                <Post {...data} />
              );
            }) }
          </div>
          { /* <PostForm onSubmit={this.handlePostSubmission.bind(this)}/> */ }
        </Container>
        <Footer></Footer>
      </>
    );
  };
};

export default App;
