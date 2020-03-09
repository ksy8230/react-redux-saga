import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Problems from './components/Problems';
import GlobalStyles from './components/styledComponents/GlobalStyles';

class App extends Component {
    componentDidMount() {
        this.props.getLists();
    }
  render() {
    return (
      <div>
        <Problems />
        <GlobalStyles />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
}

export default inject(({ Problem }) => ({
    getLists: Problem.getLists,
}))(observer(App));