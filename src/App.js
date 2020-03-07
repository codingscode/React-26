import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Posts from './containers/Posts';
import Usuario from './containers/Usuario';
import Bemvindo from './containers/Bemvindo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/usuario">Página Usuario</NavLink> |&nbsp;
            <NavLink to="/posts">Pagina Posts</NavLink>
          </nav>
          <Route path="/" component={Bemvindo} exact />
          <Route path="/Usuario" component={Usuario} />
          <Route path="/posts" component={Posts} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
