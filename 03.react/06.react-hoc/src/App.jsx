import React, { Component } from 'react';

import Login from '$comp/login';
import Register from '$comp/register';

export default class App extends Component {
  render() {
    return (
      <div>
        <Login aaa={'aaa'} bbb={'bbb'}/>
        <Register />
      </div>
    );
  }
}
