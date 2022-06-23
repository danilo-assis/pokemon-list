const isImplemented = typeof localStorage !== 'undefined';

const isKeyStored = (key) =>
  Boolean(isImplemented && localStorage.getItem(key));

const storageService = {
  set: (key, value) =>
    isImplemented && localStorage.setItem(key, JSON.stringify(value)),

  remove: (key) => isImplemented && localStorage.removeItem(key),

  has: (key) => isKeyStored(key),

  get: (key) => {
    if (isKeyStored(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return false;
  },
};

export const storageKeys = {
  favorites: "pokemon-list.favorites",
};

export default storageService;
