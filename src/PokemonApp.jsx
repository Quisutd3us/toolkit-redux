import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPokemon} from "./store/slices/pokemon";

export const PokemonApp = () => {
  const {isLoading, pokemonList, page,nextPage ,previousPage} = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon());
  }, []);
  return (
      <div style={{padding:'2rem'}}>

        <h1>Pokemon</h1>
        <p>isLoading: {isLoading ? 'True' : 'False'} </p>
        <ul>
          {
            pokemonList.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
            ))
          }
        </ul>

        <div style={{display:'flex' , gap: 5}}>


        {
            (previousPage>=0) && (
                <button
                    onClick={() => dispatch(getPokemon(previousPage))}
                >
                  Back
                </button>
            )
        }
        <button
            onClick={() => dispatch(getPokemon(nextPage))}
        >
          Next
        </button>
        </div>
      </div>
  )
}
