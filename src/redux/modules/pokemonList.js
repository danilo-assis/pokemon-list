import getLastUrlPath from '../../Assets/util/js/getLastUrlPath';

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';
const TOTAL_ITENS_PER_PAGE = 100;

const types = {
  SET_POKEMON_PAGE_LIST: 'pokemonList/SET_POKEMON_PAGE_LIST',
  SET_CURRENT_PAGE: 'pokemonList/SET_CURRENT_PAGE',
  SET_TOTAL_PAGES: 'pokemonList/SET_TOTAL_PAGES',
};

const initialState = {
  pokemonPageList: [],
  currentPage: 1,
  pokemonListLength: 0,
  totalPages: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POKEMON_PAGE_LIST:
      return {
        ...state,
        pokemonPageList: action.pokemonPageList,
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

export const setPokemonPageList = (pokemonPageList) => ({
  type: types.SET_POKEMON_PAGE_LIST,
  pokemonPageList,
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

      dispatch(
        setPokemonPageList(
          results.map((currentPokemon) => ({
            id: getLastUrlPath(currentPokemon.url),
            name: currentPokemon.name,
            url: currentPokemon.name,
          })),
        ),
      );
    })
    .catch(() => {
      console.log('Error on fetch');
    });
};

export default reducer;
