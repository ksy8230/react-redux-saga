import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import GlobalStyles from './components/styledComponents/GlobalStyles';

const Hot = hot(App);

ReactDOM.render(
    <Provider store={store}>
        <Hot />
        <GlobalStyles />
    </Provider>, document.querySelector('#root'));
