const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';
const TOTAL_ITENS_PER_PAGE = 100;

const types = {
  SET_POKEMON_URL: 'pokemonList/SET_POKEMON_URL',
  SET_CURRENT_PAGE: 'pokemonList/SET_CURRENT_PAGE',
  SET_TOTAL_PAGES: 'pokemonList/SET_TOTAL_PAGES',
};

const initialState = {
  pokemon_url: [],
  currentPage: 1,
  pokemonListLength: 0,
  totalPages: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POKEMON_URL:
      return {
        ...state,
        pokemon_url: action.pokemon_url,
      };
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case types.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages,
      };

    default:
      return state;
  }
};

export const setUrl = (pokemon_url) => ({
  type: types.SET_POKEMON_URL,
  pokemon_url,
});

export const setCurrentPage = (currentPage) => ({
  type: types.SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalPages = (totalPages) => ({
  type: types.SET_TOTAL_PAGES,
  totalPages,
});

// API fetch
export const fetchPokemonList = (currentPage) => (dispatch) => {
  fetch(
    // Url with pagination parameters
    `${ENDPOINT}?limit=${TOTAL_ITENS_PER_PAGE}&offset=${
      (currentPage - 1) * TOTAL_ITENS_PER_PAGE
    }`,
  )
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;

      dispatch(setUrl(results.map((currentPokemon) => currentPokemon.url)));
    })
    .catch(() => {
      console.log('Error on fetch');
    });
};

export default reducer;
