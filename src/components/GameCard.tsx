
import { Star, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Game } from "@/lib/gameData";

interface GameCardProps {
  game: Game;
  className?: string;
  variant?: "standard" | "horizontal" | "minimal";
}

const GameCard = ({ game, className, variant = "standard" }: GameCardProps) => {
  const isDiscounted = game.discount && game.discount > 0;
  const discountedPrice = isDiscounted 
    ? (game.price - (game.price * (game.discount / 100))).toFixed(2) 
    : null;

  if (variant === "minimal") {
    return (
      <div className={cn("game-card game-card-hover group", className)}>
        <div className="relative overflow-hidden rounded-xl aspect-[2/3]">
          <img 
            src={game.coverImage} 
            alt={game.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-lg">{game.title}</h3>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={cn("premium-card overflow-hidden flex group", className)}>
        <div className="relative w-1/3 overflow-hidden">
          <img 
            src={game.coverImage} 
            alt={game.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4 w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-xl">{game.title}</h3>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                <span className="text-sm">{game.rating}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {game.genre.slice(0, 2).map((genre) => (
                <span key={genre} className="game-tag">{genre}</span>
              ))}
            </div>
            <p className="text-sm text-white/70 line-clamp-2">{game.description}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4 text-white/60" />
              <span className="text-xs text-white/60">{game.releaseDate}</span>
            </div>
            <div className="text-right">
              {game.price === 0 ? (
                <span className="text-sm font-semibold text-emerald-400">Free to Play</span>
              ) : (
                <div className="flex flex-col">
                  {isDiscounted && (
                    <span className="text-xs line-through text-white/60">${game.price.toFixed(2)}</span>
                  )}
                  <span className={cn("font-semibold", isDiscounted ? "text-emerald-400" : "")}>
                    ${discountedPrice || game.price.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard card (default)
  return (
    <div className={cn("game-card game-card-hover group", className)}>
      <div className="relative overflow-hidden rounded-xl aspect-[2/3]">
        <img 
          src={game.coverImage} 
          alt={game.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {isDiscounted && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{game.discount}%
          </div>
        )}
        
        {game.trending && (
          <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            Trending
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-between items-center mb-1">
            <div className="flex flex-wrap gap-1">
              {game.genre.slice(0, 1).map((genre) => (
                <span key={genre} className="game-tag">{genre}</span>
              ))}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
              <span className="text-sm">{game.rating}</span>
            </div>
          </div>
          <h3 className="font-bold text-lg">{game.title}</h3>
          
          <div className="mt-2 flex justify-between items-center">
            {game.price === 0 ? (
              <span className="text-sm font-semibold text-emerald-400">Free to Play</span>
            ) : (
              <div className="flex items-center gap-2">
                {isDiscounted && (
                  <span className="text-sm line-through text-white/60">${game.price.toFixed(2)}</span>
                )}
                <span className={cn("font-semibold", isDiscounted ? "text-emerald-400" : "")}>
                  ${discountedPrice || game.price.toFixed(2)}
                </span>
              </div>
            )}
            
            <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
