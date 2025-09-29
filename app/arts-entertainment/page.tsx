import Image from "next/image"
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import { CheckCircle, Users, Building2, Clock, Award, Play, Music, Palette, Camera } from "lucide-react"

export default function ArtsEntertainmentPage() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Arts & Entertainment</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
              Creative content development, entertainment design, and artistic collaborations. We bridge healthcare with creative industries to develop engaging patient education and wellness programs.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">Creative Healthcare Solutions</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Our Arts & Entertainment division specializes in creating engaging, educational, and therapeutic content that makes healthcare more accessible and enjoyable for patients of all ages.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Video Production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Interactive Media</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Educational Games</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Therapeutic Art</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Digital Storytelling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">Wellness Programs</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/arts-entertainment-creative-professional.jpg"
                alt="Creative professionals working on healthcare entertainment projects"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Creative Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  <Play className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Video Production</h3>
                <p className="text-white/70 text-sm">
                  Educational videos, patient testimonials, and procedure explanations designed to inform and comfort patients.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  <Music className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Audio Therapy</h3>
                <p className="text-white/70 text-sm">
                  Therapeutic soundscapes, guided meditation, and healing music for patient relaxation and recovery.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  <Palette className="w-12 h-12 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Art Therapy</h3>
                <p className="text-white/70 text-sm">
                  Creative art programs and therapeutic activities that promote healing and emotional expression.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  <Camera className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Photography</h3>
                <p className="text-white/70 text-sm">
                  Professional medical photography, facility documentation, and patient journey storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Children's Hospital Animation Series</h3>
                <p className="text-white/80 mb-4">
                  Created a series of animated videos explaining medical procedures to young patients, reducing anxiety and improving cooperation during treatments.
                </p>
                <div className="text-sm text-white/60">
                  • 12 animated episodes
                  • 40% reduction in patient anxiety
                  • Used in 5+ healthcare facilities
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Elderly Care Music Program</h3>
                <p className="text-white/80 mb-4">
                  Developed a comprehensive music therapy program for memory care units, incorporating personalized playlists and interactive sessions.
                </p>
                <div className="text-sm text-white/60">
                  • 3 facilities participating
                  • 60% improvement in patient engagement
                  • Award-winning program design
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Virtual Reality Pain Management</h3>
                <p className="text-white/80 mb-4">
                  Immersive VR experiences designed to help patients manage chronic pain through guided meditation and virtual environments.
                </p>
                <div className="text-sm text-white/60">
                  • 5 VR environments created
                  • 30% reduction in pain medication usage
                  • Featured in medical journals
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Creative Process</h3>
              <p className="text-white/80 mb-6">
                We follow a structured approach to ensure every creative project meets both artistic and healthcare standards.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span>Healthcare needs assessment and goal definition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span>Creative concept development and storyboarding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <span>Medical accuracy review and compliance check</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <span>Production and iterative refinement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">5.</span>
                  <span>Testing, feedback integration, and final delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Our Creative Team</h3>
              <p className="text-white/80 mb-6">
                Our unique blend of healthcare expertise and creative talent ensures projects that are both engaging and medically sound.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Medical professionals on creative team</li>
                <li>• Evidence-based therapeutic approaches</li>
                <li>• HIPAA-compliant production processes</li>
                <li>• Multi-language and cultural adaptation</li>
                <li>• Accessibility-focused design principles</li>
                <li>• Measurable health outcome integration</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next creative healthcare project. From concept to completion, we'll help you engage patients and improve outcomes through the power of arts and entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </main>
    </ShaderBackground>
  )
}