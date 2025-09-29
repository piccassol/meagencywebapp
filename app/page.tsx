"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import CoreServices from "@/components/core-services"
import RecentArticles from "@/components/recent-articles"
import IndustriesWeServe from "@/components/industries-we-serve"
import Testimonials from "@/components/testimonials"
import CommitmentSection from "@/components/commitment-section"

export default function ShaderShowcase() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <PulsingCircle />
      <CoreServices />
      <RecentArticles />
      <IndustriesWeServe />
      <Testimonials />
      <CommitmentSection />
    </ShaderBackground>
  )
}
