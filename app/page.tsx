import Link from "next/link"
import { Check, MapPin, Phone, Mail, Clock, Award, Shield, CreditCard, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FallbackImage from "@/components/FallbackImage"
import AnimatedHero from "@/components/AnimatedHero"
import AnimatedGallery from "@/components/AnimatedGallery"
import AnimatedCTA from "@/components/AnimatedCTA"
import Logo from "@/components/Logo"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Logo className="py-2" />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-[#1e2a38]/80">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-[#1e2a38]/80">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-[#1e2a38]/80">
              Why Choose Us
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-[#1e2a38]/80">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#1e2a38]/80">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:flex">
              <Button className="bg-[#1e2a38] hover:bg-[#1e2a38]/90">Get a Free Estimate</Button>
            </Link>
            <a href="tel:8285558822" className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(828) 555-8822</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Urgency Banner */}
        <div className="w-full bg-amber-400 text-center py-2 text-sm font-semibold text-[#1e2a38]">
          Storm season is here! Book your free inspection before our schedule fills up.
        </div>

        {/* Hero Section */}
        <section className="relative bg-[#1e2a38] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <FallbackImage
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Beautiful home with professionally installed roof"
              fill
              className="object-cover opacity-40"
              priority
              fallbackSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
            />
          </div>
          <div className="container relative z-10 py-20 md:py-32 lg:py-40 text-white">
            {/* Trust Bar */}
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white text-sm font-medium">
                <Shield className="h-5 w-5" /> Licensed & Insured
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white text-sm font-medium">
                <Award className="h-5 w-5" /> BBB A+ Rating
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white text-sm font-medium">
                <Award className="h-5 w-5" /> GAF Certified
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white text-sm font-medium">
                <Award className="h-5 w-5" /> Owens Corning Preferred
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-amber-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 4.9 Google Reviews
                <a href="https://www.google.com/search?q=Summit+Ridge+Roofing+reviews" target="_blank" rel="noopener" className="underline text-white/80 ml-1">See Reviews</a>
              </div>
            </div>
            <AnimatedHero />
            {/* Request a Callback Mini-Form */}
            <form className="bg-white/90 rounded-lg shadow-lg p-4 mt-8 max-w-md mx-auto flex flex-col gap-2">
              <div className="text-[#1e2a38] font-bold text-lg mb-1 flex items-center gap-2"><Phone className="h-5 w-5" /> Request a Callback</div>
              <input type="text" placeholder="Your Name" className="rounded px-3 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1e2a38]" required />
              <input type="tel" placeholder="Phone Number" className="rounded px-3 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1e2a38]" required />
              <button type="submit" className="bg-[#1e2a38] text-white font-semibold rounded py-2 mt-1 hover:bg-[#24344a] transition">Request Callback</button>
              <span className="text-xs text-slate-500 text-center">No obligation. We respect your privacy.</span>
            </form>
          </div>
        </section>

        {/* Testimonials Section - moved up for social proof */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-[#1e2a38] sm:text-4xl mb-4">
                What Our Customers Say
              </h2>
              <p className="text-slate-600">
                Don't just take our word for it. Here's what our satisfied customers have to say about our work.
              </p>
              <a href="https://www.google.com/search?q=Summit+Ridge+Roofing+reviews" target="_blank" rel="noopener" className="inline-block mt-2 text-[#1e2a38] underline font-medium">See More Reviews</a>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-4">
                  "Summit Ridge replaced our roof after storm damage, and they were fantastic from start to finish. They
                  helped with our insurance claim and completed the work quickly and professionally. Our new roof looks
                  amazing!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-[#1e2a38] font-medium">JM</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e2a38]">Jennifer M.</p>
                    <p className="text-sm text-slate-500">Asheville, NC</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-4">
                  "We had a leak during a heavy storm and Summit Ridge came out the same day for emergency repairs. They
                  were professional, efficient, and reasonably priced. Later, they replaced our entire roof and did an
                  outstanding job."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-[#1e2a38] font-medium">RB</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e2a38]">Robert B.</p>
                    <p className="text-sm text-slate-500">Hendersonville, NC</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-4">
                  "As a first-time homeowner, I was nervous about getting a new roof. The team at Summit Ridge walked me
                  through every step of the process and helped me choose the perfect shingles for my home. Couldn't be
                  happier!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-[#1e2a38] font-medium">SL</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e2a38]">Sarah L.</p>
                    <p className="text-sm text-slate-500">Black Mountain, NC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <FallbackImage
                  src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional roofing installation on residential home"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover h-[400px]"
                  fallbackSrc="https://images.unsplash.com/photo-1632146564171-fad985083af6?q=80&w=2069&auto=format&fit=crop"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-800">
                  About Summit Ridge Roofing
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1e2a38] sm:text-4xl">
                  Family-Owned & Trusted Since 2007
                </h2>
                <p className="text-slate-600">
                  Summit Ridge Roofing is a family-owned business proudly serving Asheville and surrounding communities
                  for over 17 years. We've built our reputation on honesty, reliability, and exceptional craftsmanship.
                </p>
                <p className="text-slate-600">
                  As a fully licensed and insured company with an A+ BBB rating, we take pride in delivering friendly
                  local service with the expertise and professionalism you deserve. Our team treats every home as if it
                  were our own, ensuring quality work that stands the test of time.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#1e2a38]">17+</span>
                    <span className="text-sm text-slate-600">Years Experience</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#1e2a38]">2,000+</span>
                    <span className="text-sm text-slate-600">Roofs Completed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#1e2a38]">4.9</span>
                    <span className="text-sm text-slate-600">Google Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#1e2a38] sm:text-4xl mb-4">
                Our Roofing Services
              </h2>
              <p className="text-slate-600">
                From minor repairs to complete roof replacements, we provide comprehensive roofing solutions for
                homeowners throughout Western North Carolina.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#1e2a38]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e2a38] mb-2">Roof Repair</h3>
                <p className="text-slate-600">
                  From missing shingles to leak repairs, we'll fix your roof quickly and effectively to prevent further
                  damage.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#1e2a38]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e2a38] mb-2">Roof Replacement</h3>
                <p className="text-slate-600">
                  When repairs aren't enough, we provide full roof replacements with premium materials and expert
                  installation.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-[#1e2a38]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e2a38] mb-2">Storm Damage Restoration</h3>
                <p className="text-slate-600">
                  After severe weather, our emergency response team will assess damage and work with your insurance for
                  fast repairs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#1e2a38]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e2a38] mb-2">Roof Inspections</h3>
                <p className="text-slate-600">
                  Our thorough inspections identify potential issues before they become costly problems, extending your
                  roof's lifespan.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-[#1e2a38]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e2a38] mb-2">Financing Options</h3>
                <p className="text-slate-600">
                  We offer flexible financing solutions to make quality roofing affordable for every homeowner.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#1e2a38]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e2a38] mb-2">Emergency Service</h3>
                <p className="text-slate-600">
                  When disaster strikes, our rapid response team is available for emergency repairs to protect your
                  home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-16 md:py-24 bg-[#1e2a38] text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Summit Ridge Roofing</h2>
              <p className="text-white/80">
                We're committed to excellence in every aspect of our business, from materials to customer service.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-white/80">
                  Fully licensed and insured for your complete protection and peace of mind.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lifetime Shingle Warranty</h3>
                <p className="text-white/80">
                  We stand behind our work with manufacturer-backed lifetime warranties on premium shingles.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Financing Available</h3>
                <p className="text-white/80">
                  Flexible payment options to make quality roofing affordable for every budget.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Emergency Storm Response</h3>
                <p className="text-white/80">
                  Fast, reliable service when you need it most after severe weather damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-slate-100">
          <AnimatedGallery />
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#1e2a38] sm:text-4xl mb-4">
                What Our Customers Say
              </h2>
              <p className="text-slate-600">
                Don't just take our word for it. Here's what our satisfied customers have to say about our work.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-4">
                  "Summit Ridge replaced our roof after storm damage, and they were fantastic from start to finish. They
                  helped with our insurance claim and completed the work quickly and professionally. Our new roof looks
                  amazing!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-[#1e2a38] font-medium">JM</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e2a38]">Jennifer M.</p>
                    <p className="text-sm text-slate-500">Asheville, NC</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-4">
                  "We had a leak during a heavy storm and Summit Ridge came out the same day for emergency repairs. They
                  were professional, efficient, and reasonably priced. Later, they replaced our entire roof and did an
                  outstanding job."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-[#1e2a38] font-medium">RB</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e2a38]">Robert B.</p>
                    <p className="text-sm text-slate-500">Hendersonville, NC</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-4">
                  "As a first-time homeowner, I was nervous about getting a new roof. The team at Summit Ridge walked me
                  through every step of the process and helped me choose the perfect shingles for my home. Couldn't be
                  happier!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-[#1e2a38] font-medium">SL</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1e2a38]">Sarah L.</p>
                    <p className="text-sm text-slate-500">Black Mountain, NC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-800">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1e2a38] sm:text-4xl">
                  Get Your Free Estimate Today
                </h2>
                <p className="text-slate-600">
                  Ready to protect your home with a quality roof? Contact us for a free, no-obligation estimate. Our
                  team is standing by to help with all your roofing needs.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#1e2a38]" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <a href="tel:8285558822" className="font-medium text-[#1e2a38]">
                        (828) 555-8822
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#1e2a38]" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <a href="mailto:support@summitridgeroofing.com" className="font-medium text-[#1e2a38]">
                        support@summitridgeroofing.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#1e2a38]" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Address</p>
                      <p className="font-medium text-[#1e2a38]">123 Mountain View Dr, Asheville, NC 28801</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Our Certifications</h3>
                  <div className="flex flex-wrap gap-6">
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <p className="font-bold text-[#1e2a38]">GAF Certified</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <p className="font-bold text-[#1e2a38]">BBB A+ Rating</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <p className="font-bold text-[#1e2a38]">Owens Corning Preferred</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-xl mb-6 text-[#1e2a38]">Request a Free Estimate</h3>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Smith" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="123 Main St, Asheville" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roof-type">Roof Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select roof type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
                          <SelectItem value="metal">Metal Roof</SelectItem>
                          <SelectItem value="tile">Tile Roof</SelectItem>
                          <SelectItem value="flat">Flat Roof</SelectItem>
                          <SelectItem value="other">Other/Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your roofing needs..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#1e2a38] hover:bg-[#1e2a38]/90">
                      Submit Request
                    </Button>
                    <p className="text-xs text-slate-500 text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#1e2a38] text-white">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white text-sm font-medium">
              <Shield className="h-5 w-5" /> 100% Satisfaction Guarantee
            </div>
          </div>
          <AnimatedCTA />
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="mb-2">
                <Logo variant="light" className="py-2" />
              </div>
              <p className="text-slate-400">Protecting homes and restoring peace of mind since 2007.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white hover:text-white/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Roof Repair
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Roof Replacement
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Storm Damage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Roof Inspections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Emergency Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-slate-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <a href="tel:8285558822" className="text-slate-400 hover:text-white">
                    (828) 555-8822
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <a href="mailto:support@summitridgeroofing.com" className="text-slate-400 hover:text-white">
                    support@summitridgeroofing.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400">123 Mountain View Dr, Asheville, NC</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Summit Ridge Roofing. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden pointer-events-none">
        <a href="#contact" className="pointer-events-auto bg-[#1e2a38] text-white font-bold rounded-full px-8 py-3 shadow-lg hover:bg-[#24344a] transition text-lg">Get a Free Estimate</a>
      </div>
    </div>
  )
}
