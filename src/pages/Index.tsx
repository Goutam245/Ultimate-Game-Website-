
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturedGames from "@/components/FeaturedGames";
import TrendingGames from "@/components/TrendingGames";
import LiveStreams from "@/components/LiveStreams";
import Footer from "@/components/Footer";
import { tournaments } from "@/lib/gameData";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      
      <main>
        <FeaturedGames />
        <TrendingGames />
        <LiveStreams />
        
        {/* Esports Tournaments Section */}
        <section className="content-section">
          <h2 className="section-heading">Upcoming Tournaments</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="glass-card p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="game-tag">{tournament.game}</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded-md">
                    {tournament.status.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold">{tournament.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-white/60">Start Date</div>
                    <div className="font-medium">{tournament.startDate}</div>
                  </div>
                  <div>
                    <div className="text-white/60">Prize Pool</div>
                    <div className="font-medium text-primary">{tournament.prizePool}</div>
                  </div>
                  <div>
                    <div className="text-white/60">Teams</div>
                    <div className="font-medium">{tournament.teams}</div>
                  </div>
                  <div>
                    <div className="text-white/60">Location</div>
                    <div className="font-medium">{tournament.location}</div>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-lg border border-white/10">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron']">Join Our Gaming Community</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Connect with millions of gamers, find your next favorite game, and stay updated with the latest in gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary btn-glow">
                <span>Create Account</span>
              </button>
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/10">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
