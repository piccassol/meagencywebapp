import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CoreServices() {
  const services = [
    {
      title: "Healthcare Management",
      image: "/professional-doctor-with-stethoscope-smiling.jpg",
      description:
        "Strategic planning and leadership support is the study of disease. It is the bridge between science and medicine. Also it underpins every aspect of patient care, from...",
      link: "READ MORE",
    },
    {
      title: "Process Optimization",
      image: "/medical-team-in-scrubs-working-together.jpg",
      description:
        "Workflow redesign and compliance tools Analyzing the notion of notion properly concentrations with passive devices, or the act of calibrating notion or notion program...",
      link: "READ MORE",
    },
    {
      title: "Digital Health & Innovation",
      image: "/elderly-doctor-with-stethoscope-in-white-coat.jpg",
      description:
        "Telehealth app development, and tech adoption providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes...",
      link: "READ MORE",
    },
    {
      title: "Creative Strategy",
      image: "/medical-professional-using-tablet-technology.jpg",
      description:
        "Branding, patient campaigns, and digital marketing requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in...",
      link: "READ MORE",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Services</h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            We provide all aspects of medical practice for your whole family, including general check-ups or assisting
            you with specific injuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg?height=300&width=400&query=creative professional"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{service.description}</p>
                  <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0 h-auto font-medium">
                    {service.link} →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}