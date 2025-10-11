import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Designs" },
    { id: "bridal", label: "Bridal" },
    { id: "arabic", label: "Arabic" },
    { id: "traditional", label: "Traditional" },
    { id: "festival", label: "Festival" },
    { id: "simple", label: "Simple" },
  ];

  // Placeholder for gallery images - will be populated with actual images
  const galleryItems = [
    { id: 1, category: "bridal", alt: "Intricate bridal mehandi design" },
    { id: 2, category: "arabic", alt: "Beautiful Arabic mehandi pattern" },
    { id: 3, category: "traditional", alt: "Traditional Indian mehandi" },
    { id: 4, category: "bridal", alt: "Elegant bridal henna art" },
    { id: 5, category: "festival", alt: "Festival mehandi design" },
    { id: 6, category: "simple", alt: "Simple elegant mehandi" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 elegant-underline inline-block">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8">
              Explore our collection of beautiful Mehandi designs
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={
                  activeFilter === category.id
                    ? "bg-gradient-hero"
                    : "hover:bg-muted"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer animate-scale-in bg-muted"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-warm">
                  <p className="text-muted-foreground font-serif text-lg">
                    {item.alt}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    View Design
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-12 bg-gradient-warm rounded-3xl mandala-pattern">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Love What You See?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Book your appointment and let's create something beautiful together
            </p>
            <Button
              asChild
              size="lg"
              variant="hero"
            >
              <a href="/contact">Book Your Design</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
