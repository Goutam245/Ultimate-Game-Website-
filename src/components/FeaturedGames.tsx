
import { ArrowRight } from "lucide-react";
import { games } from "@/lib/gameData";
import GameCard from "./GameCard";

const FeaturedGames = () => {
  // Get featured games
  const featuredGames = games.filter(game => game.featured).slice(0, 4);

  return (
    <section className="content-section">
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-heading">Featured Games</h2>
        <a href="#" className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          <span>View All</span>
          <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;
