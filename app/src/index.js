import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'variables.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// borrowed here: https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
window.readCookie = (cookie) => {
    var b = document.cookie.match('(^|[^;]+)\\s*' + cookie + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
