import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Palette } from "lucide-react";

const About = () => {
  const expertise = [
    { icon: Heart, title: "Bridal Mehandi", description: "Intricate traditional and modern bridal designs" },
    { icon: Palette, title: "Arabic Designs", description: "Bold, flowing patterns with contemporary flair" },
    { icon: Users, title: "Traditional Patterns", description: "Classic Indian motifs and mandala designs" },
    { icon: Award, title: "Indo-Western", description: "Fusion styles blending cultures beautifully" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 elegant-underline inline-block">
              About Our Artistry
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8">
              Passionate about bringing beauty and tradition to every design
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20 animate-slide-up">
            <Card className="p-8 md:p-12 bg-card shadow-elegant">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Welcome to Mehandi Artistry, where tradition meets contemporary elegance. With over 10 years 
                  of experience in the art of Mehandi, I've had the privilege of being part of countless special 
                  moments - from intimate engagements to grand wedding celebrations.
                </p>
                <p>
                  My journey with Mehandi began as a childhood fascination with the intricate patterns adorning 
                  my grandmother's hands during festivals. That spark grew into a passion, leading me to study 
                  under master artists and develop my own unique style that honors tradition while embracing 
                  modern aesthetics.
                </p>
                <p>
                  Every design I create is more than just a pattern - it's a story, a celebration, a moment of 
                  connection. I believe in the power of Mehandi to transform not just hands, but entire 
                  experiences, adding that special touch of elegance and cultural richness to your most 
                  cherished occasions.
                </p>
              </div>
            </Card>
          </div>

          {/* Expertise Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12 elegant-underline inline-block w-full">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-warm rounded-3xl p-8 md:p-12 mandala-pattern">
            <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12 elegant-underline inline-block w-full">
              What We Believe
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">Quality</h3>
                <p className="text-foreground">
                  Using only the finest natural henna for rich, long-lasting color and safe application
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">Artistry</h3>
                <p className="text-foreground">
                  Every design is custom-crafted with attention to detail and creative excellence
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">Service</h3>
                <p className="text-foreground">
                  Flexible scheduling and at-home service to ensure your comfort and convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
