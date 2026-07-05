export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#111_0%,transparent_70%)]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text- font-black tracking-tighter leading-none mb-4">
            PORQUE UN <span className="text-yellow-400">10</span><br />
            NUNCA USA<br />
            CUALQUIER<br />
            CAMISETA.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mt-6">
            Las mejores camisetas, los mejores equipos, las mejores historias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 text-lg rounded-full transition">
              VER CAMISETAS
            </button>
            <button className="border border-white hover:bg-white hover:text-black font-bold px-10 py-4 text-lg rounded-full transition">
              VER PROMOCIONES
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
