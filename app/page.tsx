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
        <div className="absolute inset-0 bg-black/65"></div>

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
          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/1015/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">COLECCIÓN</div>
              <div className="text-2xl font-bold">CAMISETAS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/201/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">COLECCIÓN</div>
              <div className="text-2xl font-bold">ACCESORIOS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/133/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">NUEVA</div>
              <div className="text-2xl font-bold">LLEGADAS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/180/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">HOY</div>
              <div className="text-2xl font-bold">OFERTAS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Productos Destacados */}
      <div className="bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">NUEVAS LLEGADAS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden">Producto 1</div>
            <div className="bg-zinc-900 rounded-3xl overflow-hidden">Producto 2</div>
            <div className="bg-zinc-900 rounded-3xl overflow-hidden">Producto 3</div>
            <div className="bg-zinc-900 rounded-3xl overflow-hidden">Producto 4</div>
          </div>
        </div>
      </div>
    </main>
  );
}
