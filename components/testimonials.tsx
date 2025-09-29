import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "They got us into the apartment in record time, but also was friendly, knowledgeable and went above and beyond.",
      author: "Rina Brick",
    },
    {
      quote:
        "The best locksmith I have ever dealt with. Fast, friendly and knowledgeable. To my pleasant surprise, they arrived much earlier than I expected to fix a broken lock and re-key a lock.",
      author: "Sheila Marks",
    },
    {
      quote:
        "It was a very good experience with this company! They were fast, and helpful! I highly recommend them to anyone! They definitely know how to get the job done right! Thanks again.",
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