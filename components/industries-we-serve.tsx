import { Button } from "@/components/ui/button"

export default function IndustriesWeServe() {
  const industries = [
    "Private Medical Practices & Clinics",
    "Public Health & Nonprofits",
    "Behavioral Health Providers",
    "Healthcare Entrepreneurs",
    "Hospitals & Health Systems",
    "Telehealth Startups",
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            We provide all aspects of medical practice for your whole family, including general check-ups or assisting
            you with specific injuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-16 text-white border-cyan-400/30 bg-white/5 backdrop-blur-sm hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 text-base font-medium"
            >
              {industry}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
