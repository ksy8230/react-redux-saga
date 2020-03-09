import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import ProblemsStore from './stores/problem';

const Problem = new ProblemsStore();

ReactDOM.render(
    <Provider Problem={Problem}>
      <App />
    </Provider>, document.getElementById('root'));


