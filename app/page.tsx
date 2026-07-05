export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative h-screen">
        <img 
          src="/hero.jpeg" 
          alt="Jugadores" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              PORQUE UN <span className="text-yellow-400">10</span><br />
              NUNCA USA<br />
              CUALQUIER<br />
              CAMISETA.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl mx-auto mb-10">
              Las mejores camisetas, los mejores equipos, las mejores historias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-2xl text-lg">
                VER CAMISETAS
              </button>
              <button className="border-2 border-white font-bold px-10 py-4 rounded-2xl text-lg">
                VER PROMOCIONES
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
