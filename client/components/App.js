import React, { Component } from 'react';
// import Users from './components/Test1';
// import MainContainer from './containers/MainContainer.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>In App, outside MainContainer</h1>
        {/* <Users /> */}
      </div>
    )
  }
}

export default App;