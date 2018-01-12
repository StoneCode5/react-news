import React from 'react';
import './App.css'
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'


const App = () => (
  <div>
    <MediaQuery query="(max-device-width: 1224px)">
      <MobileIndex/>
    </MediaQuery>
    <MediaQuery query="(min-device-width: 1224px)">
      <PCIndex/>
    </MediaQuery>
  </div>
);

export default App