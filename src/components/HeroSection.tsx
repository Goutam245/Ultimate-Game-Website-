
import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { games } from "@/lib/gameData";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredGames = games.filter(game => game.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === featuredGames.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [featuredGames.length]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10"></div>

      {/* Game carousel */}
      <div className="relative h-screen w-full">
        {featuredGames.map((game, index) => (
          <div 
            key={game.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            {/* Game background image */}
            <div className="absolute inset-0 bg-black/30">
              <img 
                src={game.backgroundImage} 
                alt={game.title} 
                className="h-full w-full object-cover object-center opacity-70 scale-110 transition-transform duration-10000 ease-in-out"
                style={{
                  transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 7s ease-in-out'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            </div>

            {/* Game content */}
            <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/20 text-primary rounded-full tracking-wider">
                    FEATURED GAME
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white drop-shadow-md font-['Orbitron'] leading-tight">
                    {game.title}
                  </h1>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {game.genre.map((genre) => (
                      <span key={genre} className="game-tag">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-lg text-white/80 max-w-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  {game.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <button className="btn-primary btn-glow">
                    <span>Play Now</span>
                  </button>
                  <button className="inline-flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg backdrop-blur-sm border border-white/10">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Watch Trailer</span>
                  </button>
                </div>

                <div className="mt-12 md:mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-start gap-6">
                    <div className="space-y-1">
                      <div className="text-sm text-white/60">Developer</div>
                      <div className="font-medium">{game.developer}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-white/60">Release Date</div>
                      <div className="font-medium">{game.releaseDate}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-white/60">Rating</div>
                      <div className="font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 mr-1">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        {game.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
        <span className="text-sm text-white/60 mb-2">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
