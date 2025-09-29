import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function RecentArticles() {
  const articles = [
    {
      title: "6 Tips to Protect Your Mental Health When You're Sick",
      category: "Mental Health",
      categoryColor: "bg-emerald-500",
      image: "/person-looking-sad-or-worried--mental-health-conce.jpg",
      excerpt:
        "It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's certainly true if you test positive for COVID-19, or are presumed to be positive...",
      link: "READ MORE",
    },
    {
      title: "Unsure About Wearing a Face Mask? Here's How and Why",
      category: "Coronavirus Tips",
      categoryColor: "bg-blue-500",
      image: "/medical-professional-wearing-face-mask.jpg",
      excerpt:
        "That means that you should still be following any shelter-in-place orders in your community. But when you're venturing out to the grocery store, pharmacy or hospital...",
      link: "READ MORE",
    },
    {
      title: "Tips for Eating Healthy When You're Working From Home",
      category: "Life Style, Nutrition",
      categoryColor: "bg-orange-500",
      image: "/healthy-food-and-workspace--work-from-home-nutriti.jpg",
      excerpt:
        "It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's certainly true if you test positive for COVID-19, or are presumed to be positive...",
      link: "READ MORE",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${article.categoryColor} text-white border-0`}>
                    {article.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 leading-tight">{article.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0 h-auto font-medium">
                    {article.link} →
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
