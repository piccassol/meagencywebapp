import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function CommitmentSection() {
  const services = [
    "Fractures and dislocations",
    "Desensitisation injections",
    "Home medicine review",
    "Health Assessments",
    "High Quality Care",
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Committed To Build A Positive, Safe, Patient Focused Culture.
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Today the hospital is recognised as a world renowned institution, not only providing outstanding care and
              treatment, our goal is to deliver quality care in a respectful & compassionate manner. We strive to be the
              first and best choice for healthcare.
            </p>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">{service}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <img
                src="/smiling-female-doctor.png"
                alt="Doctor 1"
                className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
              />
              <img
                src="/male-doctor-stethoscope.png"
                alt="Doctor 2"
                className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
              />
            </div>
          </div>

          {/* Right - Appointment Form */}
          <div>
            <Card className="bg-black/40 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Book An Appointment</h3>
                <p className="text-white/70 mb-8">
                  Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our
                  doctors will receive or return any urgent calls.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Choose Clinic"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Input
                      placeholder="Choose Doctor"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Phone"
                      type="tel"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Input
                      placeholder="mm/dd/yyyy"
                      type="date"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3">
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
