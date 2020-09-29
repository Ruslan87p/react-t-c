import React from 'react';
import GetComments from './services/getComments';
import PostComments from './services/postComments';

import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <PostComments />
        <GetComments />
      </div>
    );
  }
}

export default App;
