import CardPrincipal from "./CardPrincipal"


const ListPokemons = ({pokemons}) => {


  return (
    <section className="w-full grid grid-cols-2 gap-4 p-4">
        {
            pokemons.map((pokemon)=>(<CardPrincipal key={pokemon.url} pokemonUrl={pokemon.url} />))
        }
    </section>
  )
}

export default ListPokemons