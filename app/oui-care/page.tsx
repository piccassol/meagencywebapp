import Image from "next/image"
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import { CheckCircle, Users, Building2, Clock, Award } from "lucide-react"

export default function OuiCarePage() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Image src="/ouicare-logo.webp" alt="Oui Care Logo" width={300} height={200} className="mx-auto mb-6" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
              Comprehensive healthcare solutions tailored to your family's needs with compassionate, professional care.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-white/80" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">3859+</div>
              <div className="text-white/70">Professional Doctors</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Building2 className="w-12 h-12 text-white/80" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">8596</div>
              <div className="text-white/70">Globally Hospitals</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-white/80" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">42+</div>
              <div className="text-white/70">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-white/80" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">852</div>
              <div className="text-white/70">Successful Operations</div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">Welcome To Our Industry</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Oui Care Agency is a healthcare management and innovation company focused on improving care delivery
                through strategic solutions, digital technologies, and operational excellence. We help healthcare
                providers and organizations enhance their patient outcomes and performance by combining creativity with
                clinical insight.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Monthly Checkups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Cosmetic Filling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Caring Medical Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Free Follow-Ups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Proactive And Fast Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Complete Crown</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/medical-collage.png"
                alt="Medical professionals and healthcare solutions since 1986"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Services Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/homemaker.jpg"
                    alt="Homemaker Services"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Homemaker</h3>
                <p className="text-white/70 text-sm">Therapy professionals</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/companion.jpg"
                    alt="Companion Services"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Companion</h3>
                <p className="text-white/70 text-sm">Therapy professionals</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/staff-relief.jpg"
                    alt="Staff Relief Services"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Staff Relief</h3>
                <p className="text-white/70 text-sm">Counseling services</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/private-care.jpg"
                    alt="Private Care Services"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Private</h3>
                <p className="text-white/70 text-sm">Skilled nursing services</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/medicaid-pca.jpg"
                    alt="Medicaid PCA Services"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Medicaid PCA</h3>
                <p className="text-white/70 text-sm">Home personal care services</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/hospice-care.jpg"
                    alt="Hospice Care Services"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Hospice</h3>
                <p className="text-white/70 text-sm">Therapy services</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/respite-care.jpg"
                    alt="Respite Care Services"
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Respite Care</h3>
                <p className="text-white/70 text-sm">Counseling services</p>
              </div>
            </div>
          </div>

          {/* Trusted Partners Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Trusted Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              <div className="flex justify-center">
                <Image
                  src="/brands/presence.webp"
                  alt="Presence"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/brands/apef.webp"
                  alt="APEF"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/brands/d2.webp"
                  alt="D2"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/brands/lavandieres.webp"
                  alt="La Compagnie des Lavandières"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/brands/inter-domicilio.webp"
                  alt="Inter Domicilio"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Family Healthcare</h3>
              <p className="text-white/80 mb-6">
                Complete medical care for your entire family, from routine check-ups to specialized treatments, ensuring
                everyone receives the attention they deserve.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• General health assessments</li>
                <li>• Preventive care programs</li>
                <li>• Chronic condition management</li>
                <li>• Emergency care coordination</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Personalized Care Plans</h3>
              <p className="text-white/80 mb-6">
                Customized healthcare strategies designed around your unique needs, lifestyle, and health goals for
                optimal wellness outcomes.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Individual health assessments</li>
                <li>• Tailored treatment protocols</li>
                <li>• Wellness coaching</li>
                <li>• Progress monitoring</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">24/7 Support</h3>
              <p className="text-white/80 mb-6">
                Round-the-clock healthcare support ensuring you have access to medical guidance whenever you need it
                most.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Emergency hotline access</li>
                <li>• Telehealth consultations</li>
                <li>• Urgent care coordination</li>
                <li>• Medical advice line</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Specialized Programs</h3>
              <p className="text-white/80 mb-6">
                Targeted healthcare programs addressing specific conditions and demographics with expert care and proven
                methodologies.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Senior care programs</li>
                <li>• Pediatric specialties</li>
                <li>• Mental health support</li>
                <li>• Rehabilitation services</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Oui Care?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust us with their healthcare needs. Contact us today to learn more about
              our comprehensive care solutions.
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
  )
}
