import { configureStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokemonList from "./modules/pokemonList";

const store = configureStore(
  combineReducers({ pokemonList }),
  applyMiddleware(thunk)
);

export default store;
