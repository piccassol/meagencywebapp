"use client"

export default function HeroContent() {
  return (
    <main className="relative z-20 max-w-2xl mx-auto px-8 py-16">
      <div className="text-center">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">🏥 Healthcare Innovation</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">Transforming</span> Healthcare
          <br />
          <span className="font-light tracking-tight text-white">Through Innovation</span>
        </h1>

        {/* Description */}
        <p className="text-sm font-light text-white/70 mb-6 leading-relaxed max-w-lg mx-auto">
          Strategic Solutions. Creative Technologies. Operational Excellence. We help healthcare providers enhance
          patient outcomes through digital innovation and strategic planning.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Our Services
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Call (864) 203-4390
          </button>
        </div>
      </div>
    </main>
  )
}