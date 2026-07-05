export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero - Solo imagen grande sin texto encima */}
      <div className="relative h-screen">
        <img 
          src="/hero.jpeg" 
          alt="Jugadores" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Categorías con imágenes específicas */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Camisetas - Portugal */}
          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/1015/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">COLECCIÓN</div>
              <div className="text-3xl font-bold tracking-tight">CAMISETAS</div>
            </div>
          </div>

          {/* Accesorios - Botines */}
          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/201/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">COLECCIÓN</div>
              <div className="text-3xl font-bold tracking-tight">ACCESORIOS</div>
            </div>
          </div>

          {/* Nuevas Llegadas - Messi Argentina */}
          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
            <img src="https://picsum.photos/id/133/600/400" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-sm text-yellow-400">NUEVA</div>
              <div className="text-3xl font-bold tracking-tight">LLEGADAS</div>
            </div>
          </div>

          {/* Ofertas - Mbappé Francia */}
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

      {/* Tendencias - Camisetas reales */}
      <div className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-3 tracking-tighter">TENDENCIAS</h2>
          <p className="text-center text-gray-400 mb-12">Las camisetas más deseadas del momento</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden">
              <div className="aspect-square relative">
                <img src="https://picsum.photos/id/1011/400/400" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-yellow-400 text-sm">Argentina • 2026</p>
                <p className="font-bold text-lg mt-1">Messi Local</p>
                <p className="text-yellow-400 text-2xl font-bold mt-3">$109.900</p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-3xl overflow-hidden">
              <div className="aspect-square relative">
                <img src="https://picsum.photos/id/201/400/400" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-yellow-400 text-sm">Portugal • 2026</p>
                <p className="font-bold text-lg mt-1">Ronaldo Local</p>
                <p className="text-yellow-400 text-2xl font-bold mt-3">$109.900</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden">
              <div className="aspect-square relative">
                <img src="https://picsum.photos/id/160/400/400" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-yellow-400 text-sm">Francia • 2026</p>
                <p className="font-bold text-lg mt-1">Mbappé Local</p>
                <p className="text-yellow-400 text-2xl font-bold mt-3">$109.900</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden">
              <div className="aspect-square relative">
                <img src="https://picsum.photos/id/201/400/400" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-yellow-400 text-sm">Inglaterra • 2026</p>
                <p className="font-bold text-lg mt-1">Kane Local</p>
                <p className="text-yellow-400 text-2xl font-bold mt-3">$109.900</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer con WhatsApp real */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-yellow-400 text-2xl font-bold mb-2">EL 10 DE LA CUADRA</p>
          <p className="text-gray-400 mb-8">Camisetas • Accesorios • Pasión por el fútbol</p>
          
          <div className="flex justify-center gap-12 text-5xl mb-8">
            <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400 transition">📷</a>
            <a href="https://wa.me/573212899886" target="_blank" className="hover:text-green-400 transition">💬</a>
          </div>
          
          <p className="text-gray-500 text-sm">© 2026 El 10 de la Cuadra. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
