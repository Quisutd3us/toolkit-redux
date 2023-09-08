import {setPokemon, startLoadingPokemon} from "./";
import {pokemonApi} from "../../../api/index.js";

export const getPokemon = (page = 0) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemon());
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await response.json();
    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    dispatch(setPokemon({
      page: page,
      nextPage: page + 1,
      previousPage: page - 1,
      pokemonList: data.results,
    }))
  };
};