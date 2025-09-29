"use client"

import Image from "next/image"
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-10">
        {/* Hero Section - Main Announcement */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="absolute inset-0">
            <Image src="/sunset-beach-silhouette-person-sitting-on-pier.jpg" alt="Hero Background" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-white/60 text-sm font-light tracking-[0.2em] uppercase">Super Bowl LX</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight text-balance">
              Bad Bunny. #AppleMusicHalftime. Santa Clara. 2.8.2026. #SBLX NFL. Apple Music. SNF on NBC.
            </h1>
            <button className="group bg-transparent border border-white/30 text-white px-8 py-3 rounded-full font-light text-sm hover:bg-white/10 transition-all duration-300 flex items-center mx-auto">
              WATCH NOW
            </button>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? "bg-white" : "bg-white/30"}`} />
            ))}
          </div>
        </section>

        {/* Announcements Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-sm font-light tracking-[0.2em] uppercase text-white/60">Announcements</h2>
              <button className="text-sm font-light tracking-[0.1em] uppercase text-white/60 hover:text-white transition-colors">
                Read All →
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="text-cyan-400 text-sm font-light tracking-[0.1em] uppercase">New Updates!</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                  ROCNATION
                  <br />
                  SPORTS
                  <br />
                  <span className="text-green-400">BRAZIL</span>
                </h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Roc Nation Sports International Announces Expansion To Brazil
                </p>
                <button className="group text-cyan-400 text-sm font-light tracking-[0.1em] uppercase hover:text-white transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/rocnation-sports-brazil.jpg"
                  alt="Roc Nation Sports Brazil"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Artist Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-white/60 text-sm font-light tracking-[0.2em] uppercase">Featured</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <Image src="/images/megan-thee-stallion.jpg" alt="Megan Thee Stallion" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div>
                <h3 className="text-5xl md:text-6xl font-light text-white mb-8">Megan Thee Stallion</h3>
                <button className="group text-cyan-400 text-sm font-light tracking-[0.1em] uppercase hover:text-white transition-colors flex items-center mb-12">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="space-y-6">
                  <div>
                    <div className="text-white/60 text-sm font-light tracking-[0.1em] uppercase mb-2">
                      Trending Talent
                    </div>
                    <div className="text-4xl font-light text-white">33.5MILLION</div>
                    <div className="text-white/60 text-sm">Total Followers</div>
                    <div className="text-white/60 text-sm">@TheStallion</div>
                  </div>

                  <button className="bg-white text-black px-6 py-3 rounded-full font-light text-sm hover:bg-white/90 transition-colors">
                    LISTEN NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Music Card */}
              <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="/images/rio-da-yung-og.jpg"
                  alt="Music"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-green-400 text-xs font-light uppercase tracking-wider">F.L.I.N.T.</span>
                  </div>
                  <h4 className="text-2xl font-light text-white">Music</h4>
                </div>
              </div>

              {/* Sports Card */}
              <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="/images/ea-sports.jpg"
                  alt="Sports"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-blue-400 text-xs font-light uppercase tracking-wider">Sports</span>
                  </div>
                  <h4 className="text-2xl font-light text-white">Sports</h4>
                </div>
              </div>

              {/* Discover Card */}
              <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="/images/ujc-summit.jpg"
                  alt="Discover"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-purple-400 text-xs font-light uppercase tracking-wider">UJC Summit</span>
                  </div>
                  <h4 className="text-2xl font-light text-white">Discover</h4>
                </div>
              </div>
            </div>

            {/* The Latest Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h3 className="text-sm font-light tracking-[0.2em] uppercase text-white/60">The Latest</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-lg font-light">Higher Love</span>
                    </div>
                    <p className="text-white/70 text-sm">by DESI TRILL</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <div className="w-full h-32 bg-gray-800 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-white text-lg font-light">Rio</span>
                    </div>
                    <p className="text-white/70 text-sm">New Release</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h3 className="text-sm font-light tracking-[0.2em] uppercase text-white/60">Discover</h3>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">Song Of The Week</h4>
                  <p className="text-white/70 text-sm mb-6">Listen Now To New Releases</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded"></div>
                    <div>
                      <div className="text-white font-light">Poppin 🔥</div>
                      <div className="text-white/60 text-sm">SABR JEN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philanthropy Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-sm font-light tracking-[0.2em] uppercase text-white/60">Our Philanthropy</h2>
              <button className="text-sm font-light tracking-[0.1em] uppercase text-white/60 hover:text-white transition-colors">
                Read All →
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="text-cyan-400 text-sm font-light tracking-[0.1em] uppercase">Philanthropy</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-8 leading-tight">
                  The United Justice Coalition (UJC) Summit 2025 is coming to The Shed at Hudson Yards, NYC on Friday,
                  May 30th.
                </h3>
                <button className="group text-cyan-400 text-sm font-light tracking-[0.1em] uppercase hover:text-white transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/ujc-summit.jpg" alt="UJC Summit" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-sm font-light tracking-[0.2em] uppercase text-white/60">Latest News & Stories</h2>
              <button className="text-sm font-light tracking-[0.1em] uppercase text-white/60 hover:text-white transition-colors">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <article className="group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/hip-hop-artist-recording-studio-microphone.jpg"
                    alt="Recording Studio"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400 text-xs font-light uppercase tracking-wider">Music</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-xs">Dec 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-light text-white group-hover:text-cyan-400 transition-colors">
                    The Future of Hip-Hop: New Artists Breaking Boundaries
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Exploring how emerging artists are reshaping the music industry with innovative sounds and authentic
                    storytelling.
                  </p>
                </div>
              </article>

              {/* Blog Post 2 */}
              <article className="group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/concert-stage-lights-crowd-entertainment.jpg"
                    alt="Concert Stage"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-xs font-light uppercase tracking-wider">Entertainment</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-xs">Dec 12, 2024</span>
                  </div>
                  <h3 className="text-xl font-light text-white group-hover:text-cyan-400 transition-colors">
                    Behind the Scenes: Creating Unforgettable Live Experiences
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    An inside look at how Roc Nation produces world-class entertainment events that captivate global
                    audiences.
                  </p>
                </div>
              </article>

              {/* Blog Post 3 */}
              <article className="group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/athlete-training-sports-performance.jpg"
                    alt="Sports Training"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400 text-xs font-light uppercase tracking-wider">Sports</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-xs">Dec 10, 2024</span>
                  </div>
                  <h3 className="text-xl font-light text-white group-hover:text-cyan-400 transition-colors">
                    Global Expansion: Roc Nation Sports Reaches New Markets
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    How our international expansion is creating opportunities for athletes worldwide and building
                    stronger communities.
                  </p>
                </div>
              </article>
            </div>

            {/* Featured Blog Post */}
            <div className="mt-16 pt-16 border-t border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image src="/images/music-producer-mixing-board-studio-equipment.jpg" alt="Music Production" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400 text-xs font-light uppercase tracking-wider">Featured Story</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-xs">Dec 18, 2024</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
                    The Art of Music Production: Crafting Tomorrow's Hits Today
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Dive deep into the creative process behind chart-topping hits and discover how our producers are
                    shaping the sound of the future.
                  </p>
                  <button className="group text-cyan-400 text-sm font-light tracking-[0.1em] uppercase hover:text-white transition-colors flex items-center">
                    Read Full Story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ShaderBackground>
  )
}
