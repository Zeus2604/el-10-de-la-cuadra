export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero con jugadores */}
      <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.85))]"></div>
        
        {/* Aquí irían las imágenes de los jugadores */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text- font-black tracking-tighter leading-none mb-6">
            PORQUE UN <span className="text-yellow-400">10</span><br />
            NUNCA USA<br />
            CUALQUIER<br />
            CAMISETA.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Las mejores camisetas, los mejores equipos, las mejores historias. Todo en un solo lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-2xl text-lg transition">
              VER CAMISETAS
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black font-bold px-10 py-4 rounded-2xl text-lg transition">
              VER PROMOCIONES
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
