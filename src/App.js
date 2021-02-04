import React from 'react';
import Post from './post';
// import PostForm from './postform';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { posts } from './posts.json';

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
          this.addPost(posts[i]);
        }, posts[i].showTime*1000);
      }).bind(this)(i);
    }
  };

  componentWillUnmount() {
    clearTimeout(this.showTimer);
  };

  addPost(post) {
    var idx = this.state.posts.indexOf(null);
    var newPosts = this.state.posts;
    if (idx >= 0) {
      post.reusingPost = true;
      post.idx = idx;
      newPosts[idx] = post;
    } else {
      post.idx = this.state.posts.length;
      newPosts.push(post);
    }
    this.setState({posts: newPosts});
  }

  removePost(idx) {
    var newPosts = this.state.posts;
    newPosts[idx] = null ;
    this.setState({posts: newPosts});
  };

  timerRefreshed(idx) {
    var newPosts = this.state.posts
    newPosts[idx].reusingPost = false;
    this.setState({posts: newPosts});
  }

  render() {
    return (
      <Container className="App w-50 pt-3">
        <h1 id="olympusTitle" className="text-center">🏛 Olympus</h1>
        <Post 
          bg="dark"
          user="Question asker"
          text="Soo...what do you guys think about this??"
        />
        { [0, 2, 4].map((startingIdx, key) => {
            return (<Row className='pt-3' key={key}>
              { this.state.posts.slice(startingIdx,startingIdx+2).map((data, idx) => {
                return (
                  <Col key={idx}>
                    <Post 
                      {...data} 
                      removePost={this.removePost.bind(this)}
                      timerRefreshed={this.timerRefreshed.bind(this)}
                    />
                  </Col>
                );
              }) }
            </Row>);
          }) }
      </Container>
    );
  };
};


export default App;