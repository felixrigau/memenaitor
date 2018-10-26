import React from 'react';
import ReactDOM from 'react-dom';
import Memenaitor from './components/memenaitor/memenaitor';

ReactDOM.render(<Memenaitor />, document.getElementById('root'));

module.hot.accept();

export { default as Memenaitor } from './components/memenaitor/memenaitor';
