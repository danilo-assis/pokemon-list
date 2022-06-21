const apiPrefix = "https://pokeapi.co/api/v2/";

const types = {
  SET_FETCH_LOADING: "pokemon/SET_FETCH_LOADING",
  SET_FETCH_ERROR: "pokemon/SET_FETCH_ERROR",
  SET_TOTAL_POKEMON: "pokemon/SET_TOTAL_POKEMON",
  SET_CURRENT_POKEMON: "pokemon/SET_CURRENT_POKEMON",
};

const initialState = {
  fetchStatus: {
    isLoading: true,
    hasError: false,
  },
  totalPokemon: 0,
  fetchedPokemon: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
