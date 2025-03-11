
export interface Game {
  id: string;
  title: string;
  description: string;
  genre: string[];
  releaseDate: string;
  developer: string;
  publisher: string;
  platforms: string[];
  rating: number;
  price: number;
  discount?: number;
  coverImage: string;
  backgroundImage: string;
  trailerUrl?: string;
  featured?: boolean;
  trending?: boolean;
  upcomingRelease?: boolean;
  releaseCountdown?: string;
}

export const games: Game[] = [
  {
    id: "elden-ring",
    title: "Elden Ring",
    description: "An action RPG that takes place in the Lands Between, a realm ruled by demigods who possess shards of the Elden Ring. As a Tarnished, you must traverse the vast realm to find all the Great Runes and restore the Elden Ring.",
    genre: ["Action RPG", "Open World", "Fantasy"],
    releaseDate: "February 25, 2022",
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "PlayStation 4", "Xbox One"],
    rating: 4.9,
    price: 59.99,
    coverImage: "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=600&h=900&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1588147952246-5f56157fa2ae?q=80&w=1920&auto=format&fit=crop",
    trailerUrl: "https://www.youtube.com/watch?v=e5wwSxl0atc",
    featured: true,
    trending: true,
  },
  {
    id: "forza-horizon-5",
    title: "Forza Horizon 5",
    description: "An open-world racing game set in a fictionalized representation of Mexico. Players can explore a vast and diverse landscape while participating in races, completing challenges, and collecting hundreds of cars.",
    genre: ["Racing", "Open World", "Simulation"],
    releaseDate: "November 9, 2021",
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    platforms: ["PC", "Xbox Series X/S", "Xbox One"],
    rating: 4.8,
    price: 59.99,
    discount: 30,
    coverImage: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=600&h=900&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1920&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "god-of-war-ragnarok",
    title: "God of War: Ragnarök",
    description: "The sequel to 2018's God of War, the game follows Kratos and his son Atreus as they journey through the Nine Realms to find a way to prevent Ragnarök, the prophesied apocalypse, while dealing with Norse gods and monsters.",
    genre: ["Action-Adventure", "Hack and Slash", "Mythology"],
    releaseDate: "November 9, 2022",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    platforms: ["PlayStation 5", "PlayStation 4"],
    rating: 4.9,
    price: 69.99,
    coverImage: "https://images.unsplash.com/photo-1597335584350-45ba936311e9?q=80&w=600&h=900&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1920&auto=format&fit=crop",
    trending: true,
  },
  {
    id: "counter-strike-2",
    title: "Counter-Strike 2",
    description: "A free-to-play tactical first-person shooter and the successor to Counter-Strike: Global Offensive. The game features updated graphics, improved matchmaking, and refined gameplay mechanics.",
    genre: ["FPS", "Tactical Shooter", "Competitive"],
    releaseDate: "September 27, 2023",
    developer: "Valve",
    publisher: "Valve",
    platforms: ["PC"],
    rating: 4.7,
    price: 0,
    coverImage: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=600&h=900&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1920&auto=format&fit=crop",
    trending: true,
  },
  {
    id: "league-of-legends",
    title: "League of Legends",
    description: "A free-to-play MOBA game where two teams of five players battle to destroy the enemy's Nexus. Players choose from over 150 champions, each with unique abilities, to create strategic team compositions.",
    genre: ["MOBA", "Strategy", "Competitive"],
    releaseDate: "October 27, 2009",
    developer: "Riot Games",
    publisher: "Riot Games",
    platforms: ["PC", "Mac"],
    rating: 4.6,
    price: 0,
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&h=900&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1920&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "starfield",
    title: "Starfield",
    description: "An open-world RPG set in space, where players can explore over 1,000 planets, customize their character and ship, and uncover the mysteries of the universe.",
    genre: ["RPG", "Open World", "Sci-Fi"],
    releaseDate: "September 6, 2023",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    platforms: ["PC", "Xbox Series X/S"],
    rating: 4.5,
    price: 69.99,
    discount: 15,
    coverImage: "https://images.unsplash.com/photo-1581300134629-4c3a06a31948?q=80&w=600&h=900&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    description: "A role-playing game based on the Dungeons & Dragons tabletop RPG. Players can create their own characters and embark on a journey through the Forgotten Realms, making choices that affect the story's outcome.",
    genre: ["RPG", "Turn-Based", "Fantasy"],
    releaseDate: "August 3, 2023",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Mac"],
    rating: 4.9,
    price: 59.99,
    coverImage: "https://images.unsplash.com/photo-1615672968633-1c19dd597a61?q=80&w=600&h=900&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?q=80&w=1920&auto=format&fit=crop",
    trending: true,
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.",
    genre: ["RPG", "Open World", "Cyberpunk"],
    releaseDate: "December 10, 2020",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "PlayStation 4", "Xbox One"],
    rating: 4.6,
    price: 59.99,
    discount: 25,
    coverImage: "https://images.unsplash.com/photo-1614100136606-c2e05ae5acfa?q=80&w=600&h=900&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1605806616949-59175026f08a?q=80&w=1920&auto=format&fit=crop",
  },
];

export interface Stream {
  id: string;
  title: string;
  streamer: string;
  game: string;
  viewers: number;
  thumbnailUrl: string;
  live: boolean;
}

export const liveStreams: Stream[] = [
  {
    id: "stream1",
    title: "Road to Global Elite! Sub Games Later",
    streamer: "ShroudTV",
    game: "Counter-Strike 2",
    viewers: 45213,
    thumbnailUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop",
    live: true,
  },
  {
    id: "stream2",
    title: "Elden Ring First Playthrough - No Spoilers!",
    streamer: "PewDiePie",
    game: "Elden Ring",
    viewers: 78945,
    thumbnailUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=500&auto=format&fit=crop",
    live: true,
  },
  {
    id: "stream3",
    title: "League World Championship - T1 vs G2",
    streamer: "RiotGames",
    game: "League of Legends",
    viewers: 354782,
    thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500&auto=format&fit=crop",
    live: true,
  },
  {
    id: "stream4",
    title: "Speedrunning God of War - World Record Attempt",
    streamer: "DreamHack",
    game: "God of War: Ragnarök",
    viewers: 28974,
    thumbnailUrl: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=500&auto=format&fit=crop",
    live: true,
  },
];

export interface Tournament {
  id: string;
  title: string;
  game: string;
  startDate: string;
  prizePool: string;
  teams: number;
  location: string;
  status: "upcoming" | "ongoing" | "completed";
}

export const tournaments: Tournament[] = [
  {
    id: "tournament1",
    title: "CS2 Major 2024",
    game: "Counter-Strike 2",
    startDate: "May 15, 2024",
    prizePool: "$1,000,000",
    teams: 24,
    location: "Stockholm, Sweden",
    status: "upcoming",
  },
  {
    id: "tournament2",
    title: "League World Championship 2024",
    game: "League of Legends",
    startDate: "October 5, 2024",
    prizePool: "$2,250,000",
    teams: 24,
    location: "Seoul, South Korea",
    status: "upcoming",
  },
  {
    id: "tournament3",
    title: "Fortnite World Cup 2024",
    game: "Fortnite",
    startDate: "July 26, 2024",
    prizePool: "$3,000,000",
    teams: 100,
    location: "New York, USA",
    status: "upcoming",
  },
];
