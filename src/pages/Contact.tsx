import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added when backend is connected
    toast({
      title: "Booking Request Sent!",
      description: "We'll get back to you shortly to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to book a Mehandi appointment. My name is ${formData.name || "[Your Name]"}`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 elegant-underline inline-block">
              Book Your Appointment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8">
              Let's create something beautiful together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 shadow-elegant animate-slide-up">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-2"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-2"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <Label htmlFor="date" className="text-foreground">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message / Requirements
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-2 min-h-32"
                    placeholder="Tell us about your event, design preferences, and any special requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="hero"
                  className="w-full"
                >
                  Send Booking Request
                </Button>
              </form>

              {/* Quick Contact Buttons */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or contact us directly
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button
                    type="button"
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="flex-1 text-accent border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    type="button"
                    asChild
                    variant="outline"
                    className="flex-1"
                  >
                    <a href="tel:+1234567890">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 shadow-soft">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary">
                        Call Us
                      </p>
                      <p className="text-muted-foreground">+1 (234) 567-890</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@mehandiartist.com"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary">
                        Email Us
                      </p>
                      <p className="text-muted-foreground">
                        info@mehandiartist.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Serving all areas - At-home & venue service available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Working Hours
                      </p>
                      <p className="text-muted-foreground">
                        Mon-Sun: 9:00 AM - 8:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Flexible timing for events
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* FAQ */}
              <Card className="p-6 bg-gradient-warm shadow-soft">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  Quick Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">
                      Booking in Advance
                    </p>
                    <p className="text-muted-foreground">
                      We recommend booking 2-3 weeks in advance for bridal services
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Same-Day Bookings
                    </p>
                    <p className="text-muted-foreground">
                      Subject to availability - contact us to check
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Group Bookings
                    </p>
                    <p className="text-muted-foreground">
                      Special rates available for 5+ people
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
