import { type } from '@testing-library/user-event/dist/type';
import getLastUrlPath from '../../Assets/util/js/getLastUrlPath';

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';
const TOTAL_ITENS_PER_PAGE = 100;

const types = {
  SET_POKEMON_PAGE_LIST: 'pokemonList/SET_POKEMON_PAGE_LIST',
  SET_CURRENT_PAGE: 'pokemonList/SET_CURRENT_PAGE',
  SET_TOTAL_PAGES: 'pokemonList/SET_TOTAL_PAGES',
  SET_POKEMON_DATAILS: 'pokemonList/SET_POKEMON_DATAILS',
};

const initialState = {
  pokemonPageList: [],
  currentPage: 1,
  pokemonListLength: 0,
  totalPages: 0,
  pokemonDetail: [],
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
    case types.SET_POKEMON_DATAILS:
      return {
        ...state,
        pokemonDetail: action.pokemonDetail,
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

export const setPokemonDetail = (pokemonDetail) => ({
  type: types.SET_POKEMON_DATAILS,
  pokemonDetail,
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
      dispatch(setTotalPages(Math.ceil(data.count / TOTAL_ITENS_PER_PAGE)));
    })
    .catch(() => {
      console.log('Error on fetch');
    });
};

// API fetch
export const fetchPokemonDetail = (pokemonId) => (dispatch) => {
  fetch(`${ENDPOINT}/${pokemonId}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(
        setPokemonDetail({
          name: data.name,
          id: data.id,
          sprites: data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map((currentType) => currentType.type.name),
          abilities: data.abilities.map(
            (currentAbility) => currentAbility.ability.name,
          ),
          stats: data.stats.map((currentStat) => ({
            name: currentStat.stat.name,
            base: currentStat.base_stat,
          })),
        }),
      );
    })
    .catch(() => {
      console.log('Error on fetch');
    });
};

export default reducer;
