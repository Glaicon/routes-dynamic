import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router'
import { renderRoutes } from 'react-router-config';

const ContextType = {
  // Redux store
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
};
class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
  };

  static childContextTypes = ContextType;

  render() {
    return React.Children.only(
      <BrowserRouter history={Router.history}>
        {renderRoutes(this.props.context.routes[0].routes)}
      </BrowserRouter>
    );
  }
}

export default App;
