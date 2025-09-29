import Header from "@/components/header";
import ShaderBackground from "@/components/shader-background";

export default function ServicesPage() {
  const services = [
    {
      title: "Private Care",
      description:
        "Strategic planning and leadership support in the study of disease, it is the bridge between science and medicine that embraces every aspect of patient care.",
      image: "/private-healthcare-consultation.jpg",
      features: [
        "Personalized treatment plans",
        "One-on-one consultations",
        "Comprehensive health assessments",
        "Preventive care programs",
      ],
    },
    {
      title: "Medicaid PCA",
      description:
        "Workflow redesign and compliance tools. Assisting the needs of index program concentrations with Passive devices, or the act of calibrating needs of index program.",
      image: "/medicaid-healthcare-assistance.jpg",
      features: ["Medicaid compliance", "Personal care assistance", "Care coordination", "Documentation support"],
    },
    {
      title: "Hospice",
      description:
        "Telehealth, care development, and tech adoption providers are different from both into care children achieve stay healthy. Our care includes.",
      image: "/hospice-care-comfort.jpg",
      features: ["End-of-life care", "Pain management", "Family support", "Comfort-focused treatment"],
    },
    {
      title: "Respite Care",
      description:
        "Providing patient caregivers, and digital marketing resources, advanced follow-up, the Certified Nursing Assistant rapid access to professionals specialized.",
      image: "/respite-care-relief.jpg",
      features: ["Temporary care relief", "Caregiver support", "Flexible scheduling", "Professional assistance"],
    },
    {
      title: "Homemaker",
      description:
        "Strategic planning and leadership support in the study of disease, it is the bridge between science and medicine that embraces every aspect of patient care.",
      image: "/homemaker-assistance-services.jpg",
      features: ["Household management", "Daily living assistance", "Meal preparation", "Light housekeeping"],
    },
    {
      title: "Companion",
      description:
        "Workflow redesign and compliance tools. Assisting the needs of index program concentrations with Passive devices, or the act of calibrating needs of index program.",
      image: "/companion-care-friendship.jpg",
      features: ["Social companionship", "Emotional support", "Activity assistance", "Transportation services"],
    },
    {
      title: "Staff Relief",
      description:
        "Telehealth, care development, and tech adoption providers are different from both into care children achieve stay healthy. Our care includes.",
      image: "/healthcare-staff-relief.jpg",
      features: ["Temporary staffing", "Emergency coverage", "Skilled professionals", "Flexible scheduling"],
    },
  ];

  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Care Provider Services</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              We provide all aspects of medical practice for your whole family, including general check-ups or assisting
              you with specific injuries.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-1 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/60 text-xs flex items-center">
                        <span className="w-1 h-1 bg-white/60 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 px-4 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-colors border border-white/30">
                    READ MORE →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Need Specialized Care?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our comprehensive healthcare services are designed to meet your unique needs. Contact us today to discuss
              how we can support your health and wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                Call (203) 996-5456
              </button>
            </div>
          </div>
        </div>
      </main>
    </ShaderBackground>
  );
}