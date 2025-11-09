import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-br from-purple-50 via-blue-50 to-background py-20 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-blue-600 bg-blue-50 text-blue-700 transition-transform hover:scale-105">
              <MessageCircle className="mr-1 h-3 w-3" />
              Get in Touch
            </Badge>
            <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              Visit our Hikkaduwa showroom or get in touch for inquiries about our gemstone collection and custom
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,2fr]">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-serif text-2xl font-bold">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Visit Our Showroom</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Beach Road, Hikkaduwa
                        <br />
                        Southern Province, 80240
                        <br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Phone & WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">+94 XXX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        info@ceylexgems.com
                        <br />
                        sales@ceylexgems.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Opening Hours</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <MessageCircle className="mb-4 h-8 w-8" />
                  <h3 className="mb-2 font-serif text-xl font-semibold">Prefer WhatsApp?</h3>
                  <p className="mb-4 text-sm text-primary-foreground/90 leading-relaxed">
                    Chat with us directly for quick responses and personalized assistance.
                  </p>
                  <Button variant="secondary" className="w-full gap-2">
                    Open WhatsApp <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-6 font-serif text-2xl font-bold">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="+94 XXX XXX XXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">What are you interested in? *</Label>
                    <select
                      id="interest"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                    <Label htmlFor="destination">Shipping Destination</Label>
                    <Input id="destination" placeholder="Country/Region" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, questions, or how we can help..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance">Find Us in Hikkaduwa</h2>
            <p className="text-muted-foreground">Located on the beautiful southern coast of Sri Lanka</p>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
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

      {/* Shipping Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance">
              Worldwide Delivery Available
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
              We ship certified gemstones and custom jewellery internationally with secure packaging, full insurance,
              and all necessary export documentation. Customs clearance and tracking included.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="/shipping">View Shipping Policy</a>
              </Button>
              <Button variant="outline" asChild>
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
