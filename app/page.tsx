export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero - Solo imagen grande */}
      <div className="relative h-screen">
        <img 
          src="/hero.jpeg" 
          alt="Jugadores" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Categorías */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="/images/categorias/camisetas.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">COLECCIÓN</div>
              <div className="text-3xl font-bold tracking-tight">CAMISETAS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="/images/categorias/accesorios.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">COLECCIÓN</div>
              <div className="text-3xl font-bold tracking-tight">ACCESORIOS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="/images/categorias/nuevas.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">NUEVA</div>
              <div className="text-3xl font-bold tracking-tight">LLEGADAS</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="/images/categorias/ofertas.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
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
