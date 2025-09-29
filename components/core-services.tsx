"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CoreServices() {
  useEffect(() => {
    console.log('CoreServices component mounted!')
  }, [])
  
  const services = [
    {
      title: "Healthcare Management",
      description: "Strategic planning and leadership support is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from...",
      image: "/smiling-female-doctor.png",
      link: "/services/healthcare-management",
      buttonText: "READ MORE"
    },
    {
      title: "Process Optimization",
      description: "Workflow redesign and compliance tools. Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progen...",
      image: "/private-healthcare-consultation.jpg",
      link: "/services/process-optimization",
      buttonText: "READ MORE"
    },
    {
      title: "Digital Health & Innovation",
      description: "Telehealth, app development, and tech adoption providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes...",
      image: "/phone.png",
      link: "/services/digital-health",
      buttonText: "READ MORE"
    },
    {
      title: "Creative Strategy",
      description: "Branding, patient campaigns, and digital marketing requiring additional follow up. the Cardiac Clinic provides rapid access to professionals specialized in...",
      image: "/creative.webp",
      link: "/services/creative-strategy",
      buttonText: "READ MORE"
    },
    {
      title: "Arts & Entertainment",
      description: "Creative productions, media content, and entertainment solutions that engage audiences and bring artistic visions to life through innovative storytelling and production...",
      image: "/arts-entertainment.jpg",
      link: "/arts-entertainment",
      buttonText: "READ MORE"
    }
  ]

  return (
    <section className="relative z-10 py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Comprehensive healthcare and creative solutions tailored to elevate your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.log(`Image failed to load: ${service.image}`);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 min-h-[100px]">
                  {service.description}
                </p>

                {/* Button */}
                <Link href={service.link} className="block">
                  <button className="w-full py-2.5 rounded-lg bg-white text-black font-medium text-sm transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-0.5">
                    {service.buttonText} →
                  </button>
                </Link>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-blue-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}