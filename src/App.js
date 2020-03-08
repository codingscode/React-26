import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

//import Posts from './containers/Posts';
import Usuario from './containers/Usuario';
import Bemvindo from './containers/Bemvindo';

const Posts = React.lazy(() => import('./containers/Posts'))

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
          <Route path="/usuario" component={Usuario} />
          <Route path="/posts" 
                  render={() => <Suspense fallback={<div>Carregando...</div>} >
                                   <Posts />
                                </Suspense>} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
