import * as React from 'react';
// import {connect} from 'react-redux';

const style = require('./App.css');
const logo = require('./logo.svg');

function App() {
  return (
    <div className={style.App}>
      <div className={style['App-header']}>
        <img src={logo} className={style['App-logo']} alt="logo" />
      </div>
    </div>
  );
}

export default App;
