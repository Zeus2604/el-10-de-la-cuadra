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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              PORQUE UN <span className="text-yellow-400">10</span><br className="hidden md:block" />
              NUNCA USA CUALQUIER<br className="hidden md:block" />CAMISETA.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10">
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

      {/* Categorías con mejores imágenes */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/1015/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">COLECCIÓN</div>
              <div className="text-3xl font-bold tracking-tight">CAMISETAS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/201/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">COLECCIÓN</div>
              <div className="text-3xl font-bold tracking-tight">ACCESORIOS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/133/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">NUEVA</div>
              <div className="text-3xl font-bold tracking-tight">LLEGADAS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/180/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">HOY</div>
              <div className="text-3xl font-bold tracking-tight">OFERTAS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-yellow-400 text-2xl font-bold mb-2">EL 10 DE LA CUADRA</p>
          <p className="text-gray-400 mb-8">Camisetas • Accesorios • Pasión por el fútbol</p>
          
          <div className="flex justify-center gap-12 text-5xl mb-8">
            <a href="https://www.instagram.com/oficialsoccerskin" target="_blank" className="hover:text-yellow-400 transition">📷</a>
            <a href="https://wa.me/573212899886" target="_blank" className="hover:text-green-400 transition">💬</a>
          </div>
          
          <p className="text-gray-500 text-sm">© 2026 El 10 de la Cuadra. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
