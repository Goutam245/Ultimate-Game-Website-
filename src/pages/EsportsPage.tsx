
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Trophy, Calendar, Users, MapPin, ArrowRight, BarChart3, Globe, Award } from "lucide-react";

const EsportsPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Sample tournaments data
  const upcomingTournaments = [
    {
      id: 1,
      title: "Global Masters Championship",
      game: "League of Legends",
      prize: "$2,000,000",
      date: "Aug 15 - 28, 2023",
      location: "Seoul, South Korea",
      teams: 16,
      status: "registration open",
      image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "FPS World Series",
      game: "Counter-Strike 2",
      prize: "$1,500,000",
      date: "Sep 5 - 12, 2023",
      location: "Stockholm, Sweden",
      teams: 24,
      status: "coming soon",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Battle Royale Invitational",
      game: "Apex Legends",
      prize: "$750,000",
      date: "Oct 1 - 3, 2023",
      location: "Los Angeles, USA",
      teams: 20,
      status: "registration open",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  // Sample teams data
  const topTeams = [
    {
      id: 1,
      name: "Nova Esports",
      country: "United States",
      ranking: 1,
      recentResult: "1st place at Masters Championship",
      logo: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Titan Gaming",
      country: "South Korea",
      ranking: 2,
      recentResult: "2nd place at FPS World Series",
      logo: "https://images.unsplash.com/photo-1559587564-46e09f4ca71f?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Phoenix Flames",
      country: "Canada",
      ranking: 3,
      recentResult: "1st place at Spring Invitational",
      logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Dragon Warriors",
      country: "China",
      ranking: 4,
      recentResult: "Semi-finalists at Global Championship",
      logo: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-4xl md:text-5xl font-bold font-['Orbitron']">ESPORTS</h1>
            </div>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Follow professional competitions, track your favorite teams, and stay updated 
              with the latest tournaments across all major esports titles.
            </p>
          </div>
          
          {/* Featured Tournament */}
          <div className="glass-card p-6 lg:p-8 mt-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/5 relative rounded-xl overflow-hidden h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop"
                  alt="Featured Tournament"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">FEATURED</span>
                </div>
              </div>
              
              <div className="lg:w-3/5">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="game-tag">VALORANT</span>
                  <span className="inline-block text-xs font-medium px-2 py-1 rounded-md bg-accent/30 text-accent-foreground">
                    MAJOR
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">VALORANT Champions Tour 2023</h2>
                <p className="text-white/70 mb-6">
                  The ultimate VALORANT tournament bringing together the best teams from around the 
                  world to compete for glory and a prize pool of $2,000,000.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="text-white/60 text-sm flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> Date
                    </div>
                    <div className="font-medium">Aug 15 - Sep 3, 2023</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Location
                    </div>
                    <div className="font-medium">Los Angeles, USA</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm flex items-center gap-1">
                      <Users className="h-4 w-4" /> Teams
                    </div>
                    <div className="font-medium">16 Teams</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm flex items-center gap-1">
                      <Trophy className="h-4 w-4" /> Prize Pool
                    </div>
                    <div className="font-medium text-primary">$2,000,000</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary">
                    <span>Tournament Details</span>
                  </button>
                  <button className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/10 flex items-center">
                    <span className="mr-2">Watch Trailer</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Tournaments */}
      <section className="content-section">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading">Upcoming Tournaments</h2>
          <button className="text-white/70 hover:text-white flex items-center gap-1 text-sm">
            View All <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingTournaments.map((tournament) => (
            <div key={tournament.id} className="glass-card game-card-hover overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tournament.image} 
                  alt={tournament.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="game-tag">{tournament.game}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-block px-2 py-0.5 bg-white/20 rounded text-xs text-white/90 capitalize mb-2">
                    {tournament.status}
                  </div>
                  <h3 className="text-lg font-bold truncate">{tournament.title}</h3>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-white/60 flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Date
                    </div>
                    <div className="font-medium">{tournament.date}</div>
                  </div>
                  <div>
                    <div className="text-white/60 flex items-center gap-1">
                      <Trophy className="h-3 w-3" /> Prize
                    </div>
                    <div className="font-medium text-primary">{tournament.prize}</div>
                  </div>
                  <div>
                    <div className="text-white/60 flex items-center gap-1">
                      <Users className="h-3 w-3" /> Teams
                    </div>
                    <div className="font-medium">{tournament.teams}</div>
                  </div>
                  <div>
                    <div className="text-white/60 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Location
                    </div>
                    <div className="font-medium truncate">{tournament.location}</div>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-lg border border-white/10">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Top Teams */}
      <section className="content-section">
        <h2 className="section-heading">Top Teams</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topTeams.map((team) => (
            <div key={team.id} className="glass-card p-5 hover-scale">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 mb-3">
                  <img 
                    src={team.logo} 
                    alt={team.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{team.name}</h3>
                <div className="flex items-center text-xs text-white/60 mt-1">
                  <Globe className="h-3 w-3 mr-1" />
                  <span>{team.country}</span>
                </div>
              </div>
              
              <div className="space-y-2 border-t border-white/10 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">Ranking</span>
                  <div className="flex items-center">
                    <span className="font-bold mr-1">#{team.ranking}</span>
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  <span className="font-medium text-white/90">Recent:</span> {team.recentResult}
                </div>
                <button className="w-full mt-2 py-1.5 text-sm bg-white/5 hover:bg-white/10 transition-colors rounded-md">
                  Team Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-primary/30 to-accent/30 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
          <div className="glass-card p-6">
            <Award className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold mb-1">250+</div>
            <div className="text-white/70">Annual Tournaments</div>
          </div>
          <div className="glass-card p-6">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold mb-1">5,000+</div>
            <div className="text-white/70">Professional Players</div>
          </div>
          <div className="glass-card p-6">
            <Globe className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold mb-1">120+</div>
            <div className="text-white/70">Countries Participating</div>
          </div>
          <div className="glass-card p-6">
            <Trophy className="h-10 w-10 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold mb-1">$100M+</div>
            <div className="text-white/70">Prize Money Awarded</div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="content-section text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Orbitron']">Ready to Compete?</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          Sign up for upcoming tournaments, join a team, or participate in community events.
          Start your esports journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary btn-glow">
            <span>Find Tournaments</span>
          </button>
          <button className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/10">
            Join a Team
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EsportsPage;
