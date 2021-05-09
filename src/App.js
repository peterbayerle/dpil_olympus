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
            <Route path="/e" exact component={ () => <PostView {...postInfo} /> } />
            <Route path="/p" exact component={() => <PostView {...postInfo} persist={true} /> } />
            <Route path="/c" exact component={() => <ComposeView {...postInfo} />} />
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </Container>
    );
  };
};

export default App;
