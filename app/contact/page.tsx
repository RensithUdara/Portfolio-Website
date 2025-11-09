import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Globe2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="mt-20 border-b border-border bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl animate-pulse-slow">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <Badge className="mb-6 border-0 bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 text-base text-white shadow-lg transition-transform hover:scale-105">
              We're Here to Help
            </Badge>
            <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed text-pretty">
              Visit our Hikkaduwa showroom or reach out for inquiries about our gemstone collection, custom jewelry
              services, and worldwide shipping.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,2fr]">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">Visit Our Showroom</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Beach Road, Hikkaduwa
                          <br />
                          Southern Province, 80240
                          <br />
                          Sri Lanka
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-lg">
                        <Phone className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">Phone & WhatsApp</h3>
                        <p className="text-sm font-semibold text-gray-700">+94 XXX XXX XXX</p>
                        <p className="text-xs text-gray-600 mt-1">Available Mon-Sat, 9AM-6PM</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg">
                        <Mail className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">Email</h3>
                        <p className="text-sm font-semibold text-gray-700">
                          info@ceylexgems.com
                          <br />
                          sales@ceylexgems.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-amber-50 to-amber-100/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 shadow-lg">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">Opening Hours</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Mon - Sat: 9:00 AM - 6:00 PM
                          <br />
                          Sunday: By Appointment
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-0 bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-bold">Prefer WhatsApp?</h3>
                  <p className="mb-6 text-base text-white/90 leading-relaxed">
                    Chat with us directly for instant responses, gemstone photos, and personalized assistance.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full gap-2 bg-white text-green-700 hover:bg-white/90 font-bold shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Open WhatsApp Chat <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card
              className="border-0 shadow-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <CardContent className="p-10">
                <div className="mb-8">
                  <h2 className="mb-3 font-serif text-3xl font-bold text-gray-900">Send Us a Message</h2>
                  <p className="text-base text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base font-semibold">
                        First Name *
                      </Label>
                      <Input id="firstName" placeholder="John" className="h-12 text-base" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base font-semibold">
                        Last Name *
                      </Label>
                      <Input id="lastName" placeholder="Doe" className="h-12 text-base" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email *
                    </Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 text-base" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Phone / WhatsApp
                    </Label>
                    <Input id="phone" type="tel" placeholder="+94 XXX XXX XXX" className="h-12 text-base" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-base font-semibold">
                      What are you interested in? *
                    </Label>
                    <select
                      id="interest"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="buying">Buying a Gemstone</option>
                      <option value="custom">Custom Jewellery</option>
                      <option value="investment">Investment Gemstones</option>
                      <option value="visit">Visiting Showroom</option>
                      <option value="export">Export & Shipping</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-base font-semibold">
                      Shipping Destination
                    </Label>
                    <Input id="destination" placeholder="Country/Region" className="h-12 text-base" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, questions, or how we can help..."
                      rows={6}
                      className="text-base"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Send Message <ArrowRight className="h-5 w-5" />
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    🔒 Your information is secure and will never be shared with third parties
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-gradient-to-br from-gray-50 to-blue-50/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center animate-fade-in-up">
            <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-balance text-gray-900">
              Find Us in Hikkaduwa
            </h2>
            <p className="text-xl text-gray-600">
              Located on the beautiful southern coast of Sri Lanka, just steps from the beach
            </p>
          </div>

          <div className="aspect-video overflow-hidden rounded-2xl bg-muted shadow-2xl animate-scale-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126564.77973467693!2d79.97819!3d6.13999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sHikkaduwa!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CeyLex Gems Location"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl">
                <Globe2 className="h-10 w-10 text-white" />
              </div>
              <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-balance text-gray-900">
                Worldwide Delivery Available
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed text-pretty">
                We ship certified gemstones and custom jewellery to over 50 countries with secure packaging, full
                insurance, and all necessary export documentation.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 mb-12">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-lg text-center p-6">
                <div className="mb-4 text-3xl">📦</div>
                <h3 className="mb-2 font-bold text-lg text-gray-900">Secure Packaging</h3>
                <p className="text-sm text-gray-600">Double-sealed with tamper-proof packaging</p>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 shadow-lg text-center p-6">
                <div className="mb-4 text-3xl">✈️</div>
                <h3 className="mb-2 font-bold text-lg text-gray-900">Express Shipping</h3>
                <p className="text-sm text-gray-600">DHL & FedEx with tracking</p>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 shadow-lg text-center p-6">
                <div className="mb-4 text-3xl">🛡️</div>
                <h3 className="mb-2 font-bold text-lg text-gray-900">Fully Insured</h3>
                <p className="text-sm text-gray-600">Complete insurance coverage included</p>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700 transition-all bg-transparent"
                asChild
              >
                <a href="/shipping">View Shipping Policy</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-purple-50 hover:border-purple-500 hover:text-purple-700 transition-all bg-transparent"
                asChild
              >
                <a href="/terms">Terms & Conditions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
