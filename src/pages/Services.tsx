import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const packages = [
    {
      name: "Bridal Package",
      price: "Contact for pricing",
      description: "Complete bridal mehandi experience",
      features: [
        "Full hand & feet intricate design",
        "Consultation & design planning",
        "Premium natural henna",
        "Touch-up service",
        "At-home or venue service",
        "Complimentary design for groom",
      ],
      popular: true,
    },
    {
      name: "Party Package",
      price: "Contact for pricing",
      description: "Perfect for celebrations & events",
      features: [
        "Design on both hands",
        "Choice of traditional or Arabic",
        "Natural henna application",
        "At-home service available",
        "Group booking discounts",
      ],
      popular: false,
    },
    {
      name: "Simple Design",
      price: "Contact for pricing",
      description: "Elegant & quick designs",
      features: [
        "One hand design",
        "Quick drying henna",
        "Perfect for beginners",
        "Traditional or modern style",
        "Flexible timing",
      ],
      popular: false,
    },
  ];

  const additionalServices = [
    "Festival Mehandi Specials",
    "Group Booking for Weddings",
    "At-Home Service Available",
    "Venue Service for Events",
    "Custom Design Consultation",
    "Same-Day Booking (Subject to Availability)",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 elegant-underline inline-block">
              Services & Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8">
              Choose the perfect package for your special occasion
            </p>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in relative ${
                  pkg.popular ? "border-2 border-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-hero text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-bold text-secondary mb-2">{pkg.price}</p>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  <Link to="/contact">Book This Package</Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-warm rounded-3xl p-8 md:p-12 mandala-pattern mb-20">
            <h2 className="text-4xl font-serif font-bold text-primary text-center mb-8 elegant-underline inline-block w-full">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Section */}
          <Card className="p-8 md:p-12 shadow-elegant">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
              Why Choose Our Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-foreground">
              <div>
                <h3 className="font-semibold text-primary mb-2">Premium Quality Henna</h3>
                <p className="text-muted-foreground">
                  We use only the finest natural henna that provides rich, long-lasting color and is completely safe for your skin.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Customized Designs</h3>
                <p className="text-muted-foreground">
                  Every design is tailored to your preferences, style, and the occasion, ensuring a unique and personal touch.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Flexible Service</h3>
                <p className="text-muted-foreground">
                  At-home and venue services available, making it convenient for you and your guests.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Years of Experience</h3>
                <p className="text-muted-foreground">
                  With over 10 years of experience, we bring expertise and artistry to every design we create.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Ready to Book?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contact us today to discuss your requirements and get a custom quote
            </p>
            <Button
              asChild
              size="lg"
              variant="hero"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
