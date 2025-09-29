import Header from "@/components/header";
import ShaderBackground from "@/components/shader-background";

export default function AboutPage() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">About Us</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              ME-Creative Agency LLC is a healthcare management and innovation company committed to improving care
              delivery through strategic solutions and digital health technologies.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                We provide strategic solutions, digital health technologies, and operational support to help healthcare
                organizations optimize efficiency and performance. By combining creativity with clinical insight, we're
                shaping the future of healthcare.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Our expertise lies in tailored management services, process optimization, and digital health innovations
                that lead to better patient outcomes and enhanced organizational performance. At ME-Creative, we blend
                creativity with clinical insight to redefine the future of health services and empower the next
                generation of healthcare solutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="/healthcare-professionals-team-meeting.jpg"
                alt="Healthcare professionals collaborating"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-white mb-4">Healthcare Innovation</h3>
              <p className="text-white/70">
                Leading the transformation of healthcare delivery through innovative solutions and strategic
                partnerships that prioritize patient care and operational excellence.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Compassionate Care</h3>
                <p className="text-white/70">
                  Every decision we make is guided by our commitment to improving patient outcomes and enhancing the
                  quality of care delivery.
                </p>
              </div>

              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-white/70">
                  We leverage cutting-edge technologies and creative solutions to transform healthcare delivery and
                  operational efficiency.
                </p>
              </div>

              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-white/70">
                  We believe in the power of partnerships and work closely with healthcare organizations to achieve
                  shared goals and sustainable success.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">18,000+</div>
                <div className="text-white/70">Healthcare Professionals Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/70">Healthcare Organizations Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/70">Years of Healthcare Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ShaderBackground>
  );
}