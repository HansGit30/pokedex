import Logo from "../assets/LogoPokemon.png"
import Pokeball from "../assets/Pokebola-pokeball-png-0-removebg-preview.png"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <header className="w-full h-[100px] flex items-center justify-between px-4">
        <img className="w-[120px]" src={Logo} alt="" />
        <img className="w-10" src={Pokeball} alt="" />
      </header>
      <article className="w-full h-[220px] bg-slate-500 flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-2xl fondoBanner"></div>
      </article>
    </div>
  )
}

export default Home