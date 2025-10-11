import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Users, Clock, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-mehandi.jpg";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Bridal Expertise",
      description: "Specializing in intricate bridal designs that make your special day unforgettable",
    },
    {
      icon: Users,
      title: "Group Bookings",
      description: "Perfect for weddings, parties, and festivals with friends and family",
    },
    {
      icon: Clock,
      title: "Flexible Service",
      description: "At-home visits and venue services available at your convenience",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The most beautiful bridal mehandi I could have asked for! Every detail was perfect.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      text: "Professional, talented, and so easy to work with. Highly recommend for any occasion!",
      rating: 5,
    },
    {
      name: "Meera Kapoor",
      text: "Absolutely stunning designs! The at-home service made everything so convenient.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 hero-text-shadow">
            Bringing the Beauty of Mehandi
            <span className="block text-secondary mt-2">To Your Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/95">
            Expert Mehandi artist specializing in bridal, Arabic, and traditional henna designs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="hero" className="text-lg px-8 py-6">
              <Link to="/contact">Book Your Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <Link to="/gallery">View Designs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 elegant-underline inline-block">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              Professional Mehandi artistry with years of experience and countless happy clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30 mandala-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 elegant-underline inline-block">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover:shadow-soft transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Book Your Design?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/95">
            Let's create something beautiful together. Contact us today to discuss your Mehandi needs.
          </p>
          <Button
            asChild
            size="lg"
            variant="hero"
            className="text-lg px-8 py-6"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
