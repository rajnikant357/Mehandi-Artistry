import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Phone, Mail, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8" />
              <span className="text-2xl font-serif font-bold">Mehandi Artistry</span>
            </div>
            <p className="text-sm text-primary-foreground/90">
              Bringing the beauty of traditional Mehandi to your special moments with love and artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-secondary transition-colors">
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-secondary transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li>Bridal Mehandi</li>
              <li>Arabic Designs</li>
              <li>Traditional Patterns</li>
              <li>Indo-Western Styles</li>
              <li>Festival Mehandi</li>
              <li>At-Home Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@mehandiartist.com"
                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@mehandiartist.com</span>
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Mehandi Artistry. All rights reserved.</p>
          <p className="mt-2">Your Special Day Deserves a Touch of Traditional Elegance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
