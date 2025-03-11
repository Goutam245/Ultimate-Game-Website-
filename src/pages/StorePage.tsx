
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ShoppingCart, Star, Gift, Tag, CreditCard, Calendar } from "lucide-react";

const StorePage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Featured games data
  const featuredGames = [
    {
      id: 1,
      title: "Cybernetic Odyssey",
      price: 59.99,
      discountedPrice: 39.99,
      discountPercent: 33,
      rating: 4.8,
      releaseDate: "New Release",
      tags: ["Open World", "RPG", "Sci-Fi"],
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Eternal Conflict",
      price: 49.99,
      discountedPrice: 24.99,
      discountPercent: 50,
      rating: 4.5,
      releaseDate: "Summer Sale",
      tags: ["Action", "Strategy", "Multiplayer"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Mystic Chronicles",
      price: 39.99,
      discountedPrice: null,
      discountPercent: null,
      rating: 4.9,
      releaseDate: "Pre-order",
      tags: ["Fantasy", "Adventure", "Story-Rich"],
      image: "https://images.unsplash.com/photo-1615781089196-78f2a5082f5e?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  // New releases data
  const newReleases = [
    {
      id: 4,
      title: "Galactic Conquest",
      price: 29.99,
      rating: 4.7,
      tags: ["Strategy", "Space", "4X"],
      image: "https://images.unsplash.com/photo-1614043167129-6256c55d5225?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Shadow Tactics",
      price: 19.99,
      rating: 4.6,
      tags: ["Stealth", "Action", "Indie"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Velocity Drift",
      price: 49.99,
      rating: 4.5,
      tags: ["Racing", "Simulation", "Sports"],
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Monster Hunter",
      price: 59.99,
      rating: 4.8,
      tags: ["Action", "Co-op", "Adventure"],
      image: "https://images.unsplash.com/photo-1605479579176-c22e7958bf86?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <ShoppingCart className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-4xl md:text-5xl font-bold font-['Orbitron']">GAME STORE</h1>
            </div>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Discover, buy and download the best games for your platform. 
              New releases, classics, and special offers updated daily.
            </p>
          </div>
          
          {/* Sale Banner */}
          <div className="glass-card p-8 mb-16 relative overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20 border-t border-l border-white/20">
            <div className="absolute -top-24 -right-24 h-48 w-48 bg-accent/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-48 w-48 bg-primary/30 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="mb-4 inline-block px-3 py-1 bg-accent/40 text-white rounded-full text-sm font-medium">
                  Limited Time Offer
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-4">
                  Summer Game <span className="text-accent">SALE</span>
                </h2>
                <p className="mb-6 text-white/80">
                  Save up to 75% on thousands of games across all genres. 
                  Upgrade your collection today with these amazing deals!
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-1">
                      <span className="text-xl font-bold">12</span>
                    </div>
                    <span className="text-xs text-white/70">Days</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-1">
                      <span className="text-xl font-bold">08</span>
                    </div>
                    <span className="text-xs text-white/70">Hours</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-1">
                      <span className="text-xl font-bold">45</span>
                    </div>
                    <span className="text-xs text-white/70">Minutes</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <button className="btn-primary btn-glow py-4">
                  <span className="flex items-center">
                    <ShoppingCart className="mr-2 h-5 w-5" /> 
                    Browse Sale
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Games */}
      <section className="content-section">
        <h2 className="section-heading">Featured Games</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <div key={game.id} className="glass-card group game-card-hover overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
                {game.discountPercent && (
                  <div className="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded-md text-sm font-medium">
                    -{game.discountPercent}%
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase bg-white/20 px-2 py-0.5 rounded text-white/90">{game.releaseDate}</span>
                    <span className="flex items-center text-xs">
                      <Star className="h-3 w-3 mr-1 text-yellow-400 fill-yellow-400" /> 
                      {game.rating}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mt-1 truncate">{game.title}</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {game.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-1.5 py-0.5 bg-white/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  {game.discountedPrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm line-through text-white/50">${game.price}</span>
                      <span className="text-lg font-bold">${game.discountedPrice}</span>
                    </div>
                  ) : (
                    <span className="text-lg font-bold">${game.price}</span>
                  )}
                </div>
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm transition-colors flex items-center">
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Categories */}
      <section className="content-section">
        <h2 className="section-heading">Browse Categories</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Action", "Strategy", "RPG", "Simulation", "Sports", "Indie"].map((category) => (
            <div key={category} className="glass-card p-4 text-center hover-scale cursor-pointer">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Tag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold">{category}</h3>
              <p className="text-xs text-white/50 mt-1">100+ Games</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* New Releases */}
      <section className="content-section">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading">New Releases</h2>
          <button className="text-white/70 hover:text-white flex items-center gap-1 text-sm">
            View All <span className="text-lg">→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newReleases.map((game) => (
            <div key={game.id} className="glass-card game-card-hover overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-2 right-2 flex items-center text-xs bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  <Star className="h-3 w-3 mr-1 text-yellow-400 fill-yellow-400" /> 
                  {game.rating}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold truncate">{game.title}</h3>
                <div className="flex flex-wrap gap-1 mt-1 mb-3">
                  {game.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-1.5 py-0.5 bg-white/10 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${game.price}</span>
                  <button className="p-1.5 bg-primary/20 hover:bg-primary/30 text-primary rounded transition-colors">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Payment Methods */}
      <section className="content-section bg-muted/20 py-12 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-white/60">Multiple payment options available</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Digital Gift Cards</h3>
              <p className="text-sm text-white/60">Perfect presents for gamers</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Weekly Deals</h3>
              <p className="text-sm text-white/60">New discounts every Thursday</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StorePage;
