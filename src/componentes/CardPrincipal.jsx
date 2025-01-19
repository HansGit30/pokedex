import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"



const CardPrincipal = ({pokemonUrl}) => {

  const [pokemon,setPokemon]=useState(null);  

  useEffect(()=>{
    axios
    .get(pokemonUrl)
    .then(({data})=>setPokemon(data))
  },[])

  return (
    <article className="bg-neutral-500 h-[250px] rounded-2xl grid grid-cols-1 items-center justify-items-center   " key={pokemon?.id}>
        <img className="    " src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt="" />
        <h3 className="text-center">{pokemon?.name}</h3>
    </article>
  )
}

export default CardPrincipal