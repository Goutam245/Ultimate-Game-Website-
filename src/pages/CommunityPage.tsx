
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Users, MessageSquare, Heart, Share2, Link, ArrowRight, UserPlus, Calendar, ChevronRight } from "lucide-react";

const CommunityPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Community posts data
  const communityPosts = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
        role: "Pro Player"
      },
      time: "2 hours ago",
      content: "Just finished an amazing 12-hour stream! Thanks to everyone who tuned in for the Cyberpunk 2077 playthrough. Can't wait to continue the journey tomorrow!",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=720&auto=format&fit=crop",
      likes: 324,
      comments: 42,
      shares: 18
    },
    {
      id: 2,
      user: {
        name: "Sarah Williams",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        role: "Content Creator"
      },
      time: "5 hours ago",
      content: "I'm hosting a community tournament for Valorant next weekend! $500 prize pool, open to all skill levels. Sign up link in my bio! Tag your teammates below.",
      image: null,
      likes: 512,
      comments: 87,
      shares: 64
    },
    {
      id: 3,
      user: {
        name: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
        role: "Game Developer"
      },
      time: "Yesterday",
      content: "We just released the new update for Dragon Quest Online! New features include character customization options, 3 new dungeons, and class balance changes. Check out the full patch notes!",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=720&auto=format&fit=crop",
      likes: 876,
      comments: 134,
      shares: 92
    }
  ];

  // Events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Game Night",
      date: "June 15, 2023",
      time: "8:00 PM EST",
      attendees: 58,
      description: "Join us for a fun night of Among Us, Fall Guys, and other party games!",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Beginner's Guide to Streaming",
      date: "June 20, 2023",
      time: "6:30 PM EST",
      attendees: 124,
      description: "Learn how to set up your stream, interact with viewers, and grow your channel.",
      image: "https://images.unsplash.com/photo-1603481546239-53436cba5122?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Groups data
  const popularGroups = [
    {
      id: 1,
      name: "FPS Enthusiasts",
      members: 3247,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200&auto=format&fit=crop",
      description: "For fans of first-person shooters of all types."
    },
    {
      id: 2,
      name: "MMO Guild Recruitment",
      members: 5128,
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=200&auto=format&fit=crop",
      description: "Find your next guild or recruit new members."
    },
    {
      id: 3,
      name: "Strategy Gamers",
      members: 1893,
      image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=200&auto=format&fit=crop",
      description: "Discuss tactics, share strategies, and organize tournaments."
    },
    {
      id: 4,
      name: "Game Developers",
      members: 4215,
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=200&auto=format&fit=crop",
      description: "For indie devs and aspiring game creators."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-4xl md:text-5xl font-bold font-['Orbitron']">COMMUNITY</h1>
            </div>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Connect with fellow gamers, join discussions, share your experiences, 
              and participate in community events.
            </p>
          </div>
          
          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="glass-card p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">2.5M+</div>
              <p className="text-white/70">Active Members</p>
            </div>
            <div className="glass-card p-6 text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">500K+</div>
              <p className="text-white/70">Daily Discussions</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold mb-1">10K+</div>
              <p className="text-white/70">Community Groups</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Feed */}
      <section className="content-section">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading">Community Feed</h2>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-lg bg-white/10 text-sm">Latest</button>
            <button className="px-3 py-1 rounded-lg bg-muted/30 text-sm">Popular</button>
            <button className="px-3 py-1 rounded-lg bg-muted/30 text-sm">Following</button>
          </div>
        </div>
        
        {/* Post Input */}
        <div className="glass-card p-4 mb-8">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop" 
                alt="Your Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Share something with the community..." 
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div className="flex justify-between mt-3">
                <div className="flex gap-2">
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </button>
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" y1="19" x2="20" y2="19"></line>
                    </svg>
                  </button>
                </div>
                <button className="px-4 py-1 bg-primary hover:bg-primary/90 text-white rounded-md text-sm transition-colors">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Posts */}
        <div className="space-y-6">
          {communityPosts.map((post) => (
            <div key={post.id} className="glass-card p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={post.user.avatar} 
                    alt={post.user.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{post.user.name}</h3>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                      {post.user.role}
                    </span>
                  </div>
                  <div className="text-sm text-white/60">{post.time}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-white/90 mb-3">{post.content}</p>
                {post.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post content" 
                      className="w-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              <div className="flex justify-between border-t border-white/10 pt-3">
                <button className="flex items-center gap-1 text-white/70 hover:text-primary transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-white/70 hover:text-primary transition-colors">
                  <MessageSquare className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-1 text-white/70 hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>{post.shares}</span>
                </button>
              </div>
            </div>
          ))}
          
          <div className="text-center mt-8">
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/10">
              Load More
            </button>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="content-section">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading">Upcoming Events</h2>
          <button className="text-white/70 hover:text-white flex items-center gap-1 text-sm">
            All Events <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="glass-card overflow-hidden game-card-hover">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 to-transparent"></div>
                </div>
                <div className="p-5 md:w-2/3">
                  <div className="flex items-center mb-2">
                    <span className="bg-accent/30 text-white px-2 py-0.5 rounded text-xs">EVENT</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 mb-3 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-white/70 mb-4 text-sm">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-primary">{event.attendees}</span> attending
                    </div>
                    <button className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-md text-sm transition-colors flex items-center gap-1">
                      <span>Join Event</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Popular Groups */}
      <section className="content-section">
        <h2 className="section-heading">Popular Groups</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularGroups.map((group) => (
            <div key={group.id} className="glass-card p-5 hover-scale">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 mb-3">
                  <img 
                    src={group.image} 
                    alt={group.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{group.name}</h3>
                <div className="flex items-center text-xs text-white/60 mt-1">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{group.members.toLocaleString()} members</span>
                </div>
              </div>
              
              <p className="text-white/70 text-sm text-center mb-4">
                {group.description}
              </p>
              
              <button className="w-full py-1.5 flex justify-center items-center gap-1 bg-white/5 hover:bg-white/10 transition-colors rounded text-sm">
                <UserPlus className="h-4 w-4" />
                <span>Join Group</span>
              </button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-primary/30 to-accent/30 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559587521-b2e08a29bbc9?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold font-['Orbitron'] mb-4">Join Our Growing Community</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with millions of gamers, find friends with similar interests, 
            and become part of something bigger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              <span>Create Account</span>
            </button>
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/10">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CommunityPage;
