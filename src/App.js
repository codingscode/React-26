import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


import Usuario from './containers/Usuario';
import Bemvindo from './containers/Bemvindo';

const Posts = React.lazy(() => import('./containers/Posts'))

class App extends Component {
  state = {mostrarPosts: false}

  gerenModo = () => {
    this.setState(prevState => {
        return {mostrarPosts: !prevState.mostrarPosts}
    })
  }

  render() {
    return (
      <React.Fragment>
          <button onClick={this.gerenModo}>Modo Toggle</button>
          {this.state.mostrarPosts ? (<Suspense fallback={<div>Carregando...</div>} >
                    <Posts />
                </Suspense>) : <Usuario />}
      </React.Fragment>
    )
  }
}

export default App;
