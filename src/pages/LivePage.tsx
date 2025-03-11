
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Twitch, Users, Zap, Trophy, BarChart3 } from "lucide-react";

const LivePage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Example live stream data
  const featuredStreams = [
    {
      id: 1,
      title: "VALORANT Championship Finals",
      streamer: "ProLeagueOfficial",
      game: "VALORANT",
      viewers: 145879,
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Road to Global Elite - Day 45",
      streamer: "ShroudTV",
      game: "CS2",
      viewers: 98532,
      thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Season 4 Ranked Grind",
      streamer: "Ninja",
      game: "Fortnite",
      viewers: 75621,
      thumbnail: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  const recommendedStreams = [
    {
      id: 4,
      title: "Late Night Speedruns",
      streamer: "DreamRunner",
      game: "Elden Ring",
      viewers: 12458,
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Pro Player Analysis",
      streamer: "CoachGaming",
      game: "League of Legends",
      viewers: 23651,
      thumbnail: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Community Game Night",
      streamer: "GamerGirl",
      game: "Among Us",
      viewers: 17852,
      thumbnail: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "First Playthrough - No Spoilers",
      streamer: "NoobMaster",
      game: "Baldur's Gate 3",
      viewers: 8521,
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603481546239-53436cba5122?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Twitch className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-4xl md:text-5xl font-bold font-['Orbitron']">LIVE STREAMS</h1>
            </div>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Watch the best gamers compete in real-time across your favorite titles. 
              Join live chats and never miss a moment of gaming excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStreams.map((stream) => (
              <div key={stream.id} className="glass-card group game-card-hover overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={stream.thumbnail} 
                    alt={stream.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-md text-sm flex items-center">
                    <span className="mr-1 relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    LIVE
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase">{stream.game}</span>
                      <span className="flex items-center text-xs">
                        <Users className="h-3 w-3 mr-1" /> 
                        {stream.viewers.toLocaleString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mt-1 truncate">{stream.title}</h3>
                    <p className="text-sm text-white/70">{stream.streamer}</p>
                  </div>
                </div>
                <div className="p-4 flex justify-between">
                  <button className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg text-sm transition-colors">
                    Watch Stream
                  </button>
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Zap className="h-5 w-5 text-accent" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Live Categories */}
      <section className="content-section">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading">Popular Categories</h2>
          <button className="text-white/70 hover:text-white flex items-center gap-1 text-sm">
            View All <span className="text-lg">→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {["FPS", "MOBA", "Battle Royale", "RPG", "Sports", "Strategy"].map((category) => (
            <div key={category} className="glass-card p-4 text-center hover-scale cursor-pointer">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold">{category}</h3>
              <p className="text-xs text-white/50 mt-1">500+ Streams</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Recommended Streams */}
      <section className="content-section">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading">Recommended Streams</h2>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-lg bg-muted text-sm">Following</button>
            <button className="px-3 py-1 rounded-lg bg-muted/30 text-sm">For You</button>
            <button className="px-3 py-1 rounded-lg bg-muted/30 text-sm">Trending</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedStreams.map((stream) => (
            <div key={stream.id} className="glass-card game-card-hover overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={stream.thumbnail} 
                  alt={stream.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-red-600/80 backdrop-blur-sm text-white px-1.5 py-0.5 rounded text-xs flex items-center">
                  <span className="mr-1 relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                  </span>
                  LIVE
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase">{stream.game}</span>
                    <span className="flex items-center text-xs">
                      <Users className="h-3 w-3 mr-1" /> 
                      {stream.viewers.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold truncate">{stream.title}</h3>
                <p className="text-xs text-white/70 mt-1">{stream.streamer}</p>
                <div className="mt-3 flex justify-between items-center">
                  <button className="px-3 py-1 bg-primary/20 hover:bg-primary/30 text-primary rounded text-xs transition-colors">
                    Watch Now
                  </button>
                  <div className="flex gap-1">
                    <button className="p-1 bg-white/5 hover:bg-white/10 rounded transition-colors">
                      <Zap className="h-4 w-4 text-accent" />
                    </button>
                    <button className="p-1 bg-white/5 hover:bg-white/10 rounded transition-colors">
                      <BarChart3 className="h-4 w-4 text-white/70" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-primary/30 to-accent/30 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold font-['Orbitron'] mb-4">Ready to Start Streaming?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Create your own channel, build a following, and share your gaming moments with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              <span>Start Streaming</span>
            </button>
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LivePage;
