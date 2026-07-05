export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
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
              <button className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-2xl text-lg hover:bg-yellow-300 transition">
                VER CAMISETAS
              </button>
              <button className="border-2 border-white font-bold px-10 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition">
                VER PROMOCIONES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categorías */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['CAMISETAS', 'ACCESORIOS', 'NUEVAS LLEGADAS', 'OFERTAS'].map((title, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
              <img 
                src={`https://picsum.photos/id/${100 + i * 30}/600/400`} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="text-sm text-yellow-400">COLECCIÓN</div>
                <div className="text-3xl font-bold tracking-tight">{title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tendencias */}
      <div className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-4 tracking-tighter">TENDENCIAS</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Las camisetas más deseadas del momento</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1,2,3,4].map((i) => (
              <div key={i} className="group bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-square bg-zinc-800 relative">
                  <img 
                    src={`https://picsum.photos/id/${200 + i * 20}/400/400`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                  />
                  <div className="absolute top-3 right-3 bg-black/70 text-yellow-400 text-xs px-3 py-1 rounded-full">NEW</div>
                </div>
                <div className="p-5">
                  <p className="text-yellow-400 text-sm font-medium">Real Madrid 2025</p>
                  <p className="text-xl font-bold mt-1">Camiseta Local</p>
                  <p className="text-yellow-400 text-2xl font-bold mt-3">$89.900</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
