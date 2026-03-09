import { Button } from "@/components/ui/button";
import { MapPin, Users, Heart, Compass, Camera, Wind, MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * Lankara Escapes - Home Page
 * Design Philosophy: Tropical Elegance with Authentic Storytelling
 * Color Palette: Ocean Blue (#0B5F7F), Jungle Green (#2D6A4F), Sand Beige (#D4A574)
 * Typography: Playfair Display (headlines), Inter (body), Poppins (accents)
 */

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const WHATSAPP_NUMBER = "94770164997";
const WHATSAPP_MESSAGE = "Hi Lankara Escapes! I'm interested in planning a trip to Sri Lanka.";

export default function Home() {
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  const handlePlanTrip = () => {
    handleWhatsApp();
  };

  const handleExploreDestination = (destinationName: string) => {
    handleWhatsApp();
  };

  const destinations: Destination[] = [
    {
      id: "sigiriya",
      name: "Sigiriya",
      description: "Ancient rock fortress and one of Sri Lanka's most iconic UNESCO heritage sites.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/sigiriya-destination-ZcXkJzMLweWtYUwmJPBBRZ.webp",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      id: "ella",
      name: "Ella",
      description: "A beautiful mountain village surrounded by tea plantations, waterfalls, and scenic viewpoints.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/ella-nine-arch-bridge-cPGBdEHrpu8zCkgdAaRhZC.webp",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      id: "yala",
      name: "Yala National Park",
      description: "Famous for leopard safaris, elephants, and Sri Lanka's incredible wildlife.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/yala-safari-bbMT5Xn5N57tC3rDvNgzt2.webp",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: "galle",
      name: "Galle Fort",
      description: "Historic colonial fort city with charming streets, ocean views, and cultural heritage.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/galle-fort-buYwx9c5J4b5KzgoDzxypo.webp",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      id: "mirissa",
      name: "Mirissa",
      description: "Tropical beach paradise known for whale watching, palm-lined beaches, and sunsets.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/mirissa-beach-E9JDHmdijwYxWh2zMeoAxS.webp",
      icon: <Wind className="w-6 h-6" />,
    },
    {
      id: "kandy",
      name: "Kandy",
      description: "Cultural capital of Sri Lanka and home to the sacred Temple of the Tooth.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/kandy-temple-PWoW9PTcTPfXMk6e7TPG2J.webp",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

  const experiences: Experience[] = [
    {
      id: "coastal",
      title: "Coastal Tours",
      description: "Explore pristine beaches, sea pools, and tropical coastlines.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/mirissa-beach-E9JDHmdijwYxWh2zMeoAxS.webp",
      icon: <Wind className="w-6 h-6" />,
    },
    {
      id: "wildlife",
      title: "Wildlife Safaris",
      description: "Encounter elephants, leopards, and diverse wildlife in natural habitats.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/yala-safari-bbMT5Xn5N57tC3rDvNgzt2.webp",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: "cultural",
      title: "Cultural Heritage Tours",
      description: "Discover ancient temples, historical sites, and local traditions.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/kandy-temple-PWoW9PTcTPfXMk6e7TPG2J.webp",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      id: "hiking",
      title: "Hiking & Waterfalls",
      description: "Trek through mountains, tea plantations, and scenic viewpoints.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/ella-destination-RGr5RnkGiJfV5uBNLRNvdm.webp",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      id: "group",
      title: "Group Travel",
      description: "Customized experiences for families, friends, and organized groups.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/riana-local-guide-JvfZ3KUd9iMSNvrwub2uRM.webp",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="font-display text-2xl font-bold text-primary">
            Lankara Escapes
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#destinations" className="text-foreground hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#experiences" className="text-foreground hover:text-primary transition-colors">
              Experiences
            </a>
            <a href="#host" className="text-foreground hover:text-primary transition-colors">
              Meet Riana
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <Button 
            onClick={handlePlanTrip}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Plan Your Trip
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/hero-coastline-fX6xfrumjohejXhkeBogzF.webp"
          alt="Sri Lankan Coastline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Trusted Local Travel Partner in Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Authentic travel experiences, customized tours, and reliable ground handling for travelers and international partners.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Explore Experiences
            </Button>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 text-white border-white"
            >
              Plan Your Trip
            </Button>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 text-white border-white"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section id="experiences" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the diverse travel experiences that make Sri Lanka unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer h-80"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="mb-3 text-accent">{exp.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-sm text-white/90 line-clamp-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sri Lanka Destinations Section */}
      <section id="destinations" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Popular Sri Lanka Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the most iconic and breathtaking destinations across the island
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="destination-card group"
                onMouseEnter={() => setHoveredDestination(dest.id)}
                onMouseLeave={() => setHoveredDestination(null)}
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="destination-overlay" />
                </div>

                <div className="relative p-6 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {dest.name}
                    </h3>
                    <div className="text-primary">{dest.icon}</div>
                  </div>

                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {dest.description}
                  </p>

                  <Button
                    onClick={() => handleExploreDestination(dest.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-accent font-semibold"
                    size="sm"
                  >
                    Explore Tour
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Local Host - Riana Section */}
      <section id="host" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-full min-h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663329273764/bgkV7mCM5tdkUQ2DSwdiug/riana-portrait-accurate-iTRstRFo7YJ88kr4q5NASR.webp"
                alt="Riana - Local Travel Guide"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Meet Your Local Host — Riana
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Riana is a passionate Sri Lankan travel host who loves sharing the hidden beauty of the island with travelers from around the world. With deep knowledge of local culture, food, nature, and unique destinations, she creates personalized journeys that go far beyond typical tourist routes.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-accent font-semibold text-foreground mb-1">
                      Peaceful Beaches
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Discover pristine coastal paradises and hidden beach gems
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-accent font-semibold text-foreground mb-1">
                      Wildlife Safaris
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Experience thrilling encounters with Sri Lanka's incredible wildlife
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-accent font-semibold text-foreground mb-1">
                      Mountain Adventures
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Trek through misty peaks, tea plantations, and scenic viewpoints
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-accent font-semibold text-foreground mb-1">
                      Cultural Experiences
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Connect with authentic local traditions and heritage sites
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-foreground italic pt-4 border-t border-border">
                "Whether you're looking for peaceful beaches, wildlife safaris, mountain adventures, or cultural experiences, Riana ensures every journey feels authentic, comfortable, and unforgettable. Her goal is simple: to help travelers experience the real Sri Lanka with the guidance of a trusted local friend."
              </p>

              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-accent font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Plan Your Trip With Riana
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Sri Lankan Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with Riana and our team to create your perfect customized travel experience
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="bg-white hover:bg-white/90 text-primary font-semibold"
            >
              Start Planning Now
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Reach out to us for inquiries, bookings, or partnership opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-accent font-semibold text-foreground mb-2">Phone / WhatsApp</h3>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="text-primary hover:text-primary/80 transition-colors text-lg font-semibold"
                >
                  +94 77 016 4997
                </a>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-accent font-semibold text-foreground mb-2">Email</h3>
                <a 
                  href="mailto:admin@lankaraescapes.com"
                  className="text-primary hover:text-primary/80 transition-colors text-lg font-semibold"
                >
                  admin@lankaraescapes.com
                </a>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 text-center">
              <h3 className="font-accent font-semibold text-foreground mb-4">Quick Connect</h3>
              <p className="text-muted-foreground mb-6">
                Click below to chat with us on WhatsApp for immediate assistance
              </p>
              <Button 
                size="lg"
                onClick={handleWhatsApp}
                className="bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Lankara Escapes</h3>
              <p className="text-white/70 text-sm">
                Your trusted local travel partner in Sri Lanka
              </p>
            </div>
            <div>
              <h4 className="font-accent font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#experiences" className="hover:text-white transition-colors">Experiences</a></li>
                <li><a href="#host" className="hover:text-white transition-colors">Meet Riana</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-accent font-semibold mb-4">Contact</h4>
              <p className="text-sm text-white/70">
                Phone: +94 77 016 4997<br />
                Email: admin@lankaraescapes.com
              </p>
            </div>
            <div>
              <h4 className="font-accent font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/lankaraescapes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://facebook.com/lankaraescapes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Lankara Escapes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
