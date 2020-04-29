import React from 'react';
import Users from'./components/users';
import UserInputs from './components/userInputs';
import PostInputs from './components/postInputs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './components/posts';


function App() {
    return (
    <div className="App">
      <Router>
        
      <nav className='header'>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/addUser">Add User</Link>
            </li>
            <li>
              <Link to="/tweets">Tweets</Link>
            </li>
            <li>
              <Link to="/addTweet">Add tweet</Link>
            </li>
          </ul>
        </nav>
      <Switch >
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/addUser">
            <UserInputs />
          </Route>
          <Route path="/addTweet">
            <PostInputs />
          </Route>
          <Route path="/tweets">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
