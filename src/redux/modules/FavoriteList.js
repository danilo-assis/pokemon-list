import storage, { storageKeys } from '../../Assets/util/js/services/storage';

const types = {
  SET_FAVORITE_LIST: 'favoriteList/SET_FAVORITE_LIST',
  ADD_FAVORITE: 'favoriteList/ADD_FAVORITE',
};

const initialState = {
  favoriteList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.list,
      };
    case types.ADD_FAVORITE:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.pokemonId],
      };
    default:
      return state;
  }
};

export const setFavoriteList = (list) => ({
  type: types.SET_FAVORITE_LIST,
  list,
});

export const addFavorite = (pokemonId) => ({
  type: types.ADD_FAVORITE,
  pokemonId,
});

export const getFavorite = () => storage.get(storageKeys.favorites);

export const storeFavorite = () => (_, getState) => {
  const { favoriteList } = getState().FavoriteList;

  storage.set(storageKeys.favorites, favoriteList);
};

export const addPokemonIdToFavorite = (pokemonId) => (dispatch, getState) => {
  const { favoriteList } = getState().FavoriteList;
  console.log('favoriteList', favoriteList);
  const isIdOnList = favoriteList.includes(pokemonId);
  if (!isIdOnList) {
    dispatch(addFavorite(pokemonId));
    dispatch(storeFavorite());
  }
};

// Get the favorite from localStorage and add on State
export const setFavoriteFromStorage = () => (dispatch) => {
  const storageFavorite = getFavorite() || [];

  dispatch(setFavoriteList(storageFavorite));
};

export default reducer;
