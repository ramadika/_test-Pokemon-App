import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import App from 'App';
import BaseLayout from 'components/BaseLayout'
import PokemonList from 'components/PokemonList'
import PokemonDetail from 'components/PokemonDetail'
import MyPokemon from 'components/MyPokemon'


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={App}></Route>
        <Route path="/pokemonList" component={PokemonList}></Route>
        <Route exact path="/detail/:id" component={PokemonDetail}></Route>
        <Route path="/myPokemon" component={MyPokemon}></Route>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
