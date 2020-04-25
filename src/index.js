import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import './utils/flexible';
import './mixin.scss';
import GlobalStyle from './globalStyle'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
=======
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> dev

serviceWorker.unregister();
