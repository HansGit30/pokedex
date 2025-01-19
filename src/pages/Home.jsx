import { useState } from "react"
import Logo from "../assets/LogoPokemon.png"
import Pokeball from "../assets/Pokebola-pokeball-png-0-removebg-preview.png"
import "./Home.css"
import axios from "axios"
import { useEffect } from "react"
import ListPokemons from "../componentes/ListPokemons"


const Home = () => {

  const [allpokemons,setAllpokemons] = useState([]);
  
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(({data})=>setAllpokemons(data.results))
  },[])


  return (
    <div>
      <header className="w-full h-[100px] flex items-center justify-between px-4">
        <img className="w-[120px]" src={Logo} alt="" />
        <img className="w-10" src={Pokeball} alt="" />
      </header>
      <article className="w-full h-[220px] flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-2xl fondoBanner"></div>
      </article>
      <aside className="w-full h-[70px] pl-4 flex items-center">
        <div className="w-[80px] h-10 rounded-3xl bg-slate-400 flex items-center justify-center">Todos</div>
      </aside>
      <ListPokemons pokemons={allpokemons} />
    </div>
  )
}

export default Home