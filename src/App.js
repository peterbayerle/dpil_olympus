import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EphemeralPostView from './pages/ephemeral';
import PersistentPostView from './pages/persistent';
import ComposeView from './pages/compose';
import SelectView from './components/selectview';
import Header from './components/header';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Container className="App">
        <Header></Header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SelectView} />
            <Route path="/e" exact component={EphemeralPostView} />
            <Route path="/p" exact component={PersistentPostView}/>
            <Route path="/c" exact component={ComposeView}/>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </Container>
    );
  };
};

export default App;
