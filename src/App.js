import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ComposeView from './pages/compose';
import PostView from './pages/postview';
import SelectView from './components/selectview';
import Header from './components/header';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import postInfo from './posts.json';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Container className="App">
        <Header></Header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SelectView} />
            <Route path="/e/v" exact component={ () => <PostView {...postInfo} topic="veggie" /> } />
            <Route path="/p/v" exact component={() => <PostView {...postInfo} topic="veggie" persist={true} /> } />
            <Route path="/ce/v" exact component={() => <ComposeView {...postInfo} topic="veggie" />} />
            <Route path="/cp/v" exact component={() => <ComposeView {...postInfo} topic="veggie" persist={true} />} />
            <Route path="/e/s" exact component={ () => <PostView {...postInfo} topic="surveillance" /> } />
            <Route path="/p/s" exact component={() => <PostView {...postInfo} topic="surveillance" persist={true} /> } />
            <Route path="/ce/s" exact component={() => <ComposeView {...postInfo} topic="surveillance" />} />
            <Route path="/cp/s" exact component={() => <ComposeView {...postInfo} topic="surveillance" persist={true} />} />
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </Container>
    );
  };
};

export default App;
