import {createSlice} from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    previousPage: 0,
    page: 0,
    nextPage: 0,
    pokemonList: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemon: (state, /* action */) => {
      state.isLoading = true;
    },
    setPokemon: (state, action) => {
      state.isLoading = false;
      state.pokemonList = action.payload.pokemonList;
      state.previousPage = action.payload.previousPage;
      state.page = action.payload.page;
      state.nextPage = action.payload.nextPage;
    }
  }
});


export const {startLoadingPokemon, setPokemon} = pokemonSlice.actions;