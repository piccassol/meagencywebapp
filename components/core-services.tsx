"use client"
import { useEffect } from 'react'

export default function CoreServices() {
  useEffect(() => {
    console.log('CoreServices component mounted!')
  }, [])
  
  const services = [
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth and engagement across all digital channels.",
      icon: "📱"
    },
    {
      title: "Brand Development",
      description: "Creating compelling brand identities that resonate with your target audience.",
      icon: "🎨"
    },
    {
      title: "Content Creation",
      description: "Engaging content that tells your story and connects with your customers.",
      icon: "✍️"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites that deliver exceptional user experiences.",
      icon: "💻"
    },
    {
      title: "Social Media Management",
      description: "Building and managing your social presence to maximize engagement.",
      icon: "📣"
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven strategies backed by comprehensive analytics and reporting.",
      icon: "📊"
    }
  ]

  return (
    <section className="relative z-10 py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and drive meaningful results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block px-8 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-300 hover:bg-white/90 hover:scale-105"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  )
}