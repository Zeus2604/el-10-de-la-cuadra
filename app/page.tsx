export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.8))]"></div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
            PORQUE UN <span className="text-yellow-400">10</span><br />
            NUNCA USA<br />
            CUALQUIER<br />
            CAMISETA.
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Las mejores camisetas, los mejores equipos, las mejores historias. Todo en un solo lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition">
              VER CAMISETAS
            </button>
            <button className="border-2 border-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-black transition">
              VER PROMOCIONES
            </button>
          </div>
        </div>
      </div>

      <div className="h-24"></div>
    </main>
  );
}
