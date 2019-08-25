import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


//Boilderplate from: 'My Minimal React Webpack Babel Setup'
const title = 'Argos R&T';

ReactDOM.render(<App />, document.getElementById('app')
);

module.hot.accept();