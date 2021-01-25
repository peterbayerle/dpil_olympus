import React from 'react';
import Post from './post';
import PostForm from './postform';
import { LoremIpsum } from "lorem-ipsum";
import Container from 'react-bootstrap/Container';

// import { CSSTransition, TransitionGroup} from 'react-transition-group';

// import './styles.css';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 10,
    min: 5
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.currentIndx = 0;
    this.state = {
      posts: [],
    };
  };

  componentDidMount() {
    // add 3 posts
    var posts = [];
    for (let i=0; i<3; i++) {
      posts.push({
        key: i,
        user: `Name ${i+1}`,
        text: lorem.generateSentences(),
        timeShow: 3000*i,
        timeHide: 3000*i + 10000
      });
    }

    this.setState({ posts: posts });
  };

  render() {
    return (
      <Container className="App w-50 pt-3">
        <h1 id="olympusTitle" className="text-center">🏛 Olympus</h1>
        <PostForm />
        { this.state.posts.map((data) => {
          return (
            <Post {...data} />
          );
        }) }
      </Container>
    );
  };
};

export default App;
