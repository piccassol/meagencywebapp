import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "MCA transformed our hospital's patient engagement strategy with their innovative digital solutions. Their blend of healthcare expertise and creative vision exceeded all our expectations.",
author: "Dr. Rachel Martinez.",
      author: "Rina Brick",
    },
    {
      quote:
        "The process optimization they implemented reduced our clinic's wait times by 60%. Their team truly understands the unique challenges of healthcare operations and delivers real results.",
      author: "Sheila Marks",
    },
    {
      quote:
        "Outstanding creative work on our health awareness campaign! MCA's ability to make complex medical information accessible and engaging has been invaluable to our community outreach efforts.",
      author: "Johnny Samuel",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Removed the unwanted heading and paragraph */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-cyan-400 text-4xl mb-6">"</div>
                <p className="text-white/80 text-base leading-relaxed mb-6">{testimonial.quote}</p>
                <p className="text-white font-medium">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}