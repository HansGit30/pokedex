
import "./Cover.css"

const Cover = () => {
    return (
        <div className="w-full h-screen overflow-hidden banner">
            <header className="w-full h-[10%] flex items-center px-4">
                <img className="w-[100px]" src="../assets/LogoPokemon.png" alt="" />
            </header>
            <section className="relative w-full h-[60%] flex justify-center items-end  p-10">
                <div className="relative w-[60%] h-[70%] flex justify-center items-center">

                    <div className="absolute cardDer w-full h-full rounded-3xl  -rotate-45 z-10 right-[120px]"></div>

                    <div className="absolute cardIz w-full h-full rounded-3xl  rotate-45 z-20 left-[120px]"></div>

                    <div className="absolute cardCen w-full h-full rounded-3xl  z-30"></div>
                </div>
            </section>
            <section className="w-full h-[30%] text-center text-white">
                <h1 className="text-4xl mb-3">¡Atrápalos a todos!</h1>
                <p className="px-4 mb-3">Explora, aprende y encuentra a tus Pokémon favoritos en un solo lugar.</p>
                <button className="relative w-[200px] h-[50px] bg-white rounded-xl text-black">
                    <img className="absolute top-2 left-2 w-9" src="../assets/Pokebola-pokeball-png-0-removebg-preview.png" alt="" />
                    GO!!
                </button>
            </section>
        </div>
    )
}

export default Cover