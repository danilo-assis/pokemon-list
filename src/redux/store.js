import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import PokemonList from './modules/PokemonList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ PokemonList }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
