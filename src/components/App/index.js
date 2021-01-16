import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AboutPage from '../../pages/About';
import HomePage from '../../pages/Home';
import PostsPage from '../../pages/Posts';
import PostPage from '../../pages/Posts/Post';
import Header from '../Header';
import './main.css';

function App() {
  return (
    <Router>
      <Header
        name="JSON Placeholder"
        links={[
          { name: 'Home' , link: '/'},
          { name: 'Posts' , link: '/posts'},
          { name: 'About' , link: '/about'},
        ]}
      />
      <main className="content">
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/posts' exact component={PostsPage}/>
          <Route path='/posts/:id' exact component={PostPage}/>
          <Route path='/about' exact component={AboutPage}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
