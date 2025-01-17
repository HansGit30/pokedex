import Logo from "../assets/LogoPokemon.png"
import Pokeball from "../assets/Pokebola-pokeball-png-0-removebg-preview.png"
import "./Home.css"

const Home = () => {
  return (
    <div>
      {/* <nav className="fixed bottom-0 w-full h-[80px] bg-black">
        <ul className="w-[90%] h-full bg-white mx-auto rounded-2xl"></ul>
      </nav> */}
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
      <section className="w-full grid grid-cols-2 gap-4 p-4">
        <div className="h-[250px] bg-slate-500 rounded-2xl"></div>
        <div className="h-[250px] bg-slate-500 rounded-2xl"></div>
        <div className="h-[250px] bg-slate-500 rounded-2xl"></div>
        <div className="h-[250px] bg-slate-500 rounded-2xl"></div>
      </section>
    </div>
  )
}

export default Home