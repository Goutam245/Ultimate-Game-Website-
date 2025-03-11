
import { games } from "@/lib/gameData";
import GameCard from "./GameCard";

const TrendingGames = () => {
  // Get trending games
  const trendingGames = games.filter(game => game.trending).slice(0, 3);

  return (
    <section className="content-section bg-gradient-to-b from-background to-black/50">
      <h2 className="section-heading">Trending Now</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {trendingGames.map((game) => (
          <GameCard key={game.id} game={game} variant="horizontal" />
        ))}
      </div>
    </section>
  );
};

export default TrendingGames;
