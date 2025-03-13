import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import FeatureSection from "@/components/feature"
import HeroSection from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </main>
  )
}

