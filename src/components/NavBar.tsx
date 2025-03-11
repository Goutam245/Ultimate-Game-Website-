
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  User, 
  Bell, 
  Menu, 
  X, 
  GamepadIcon, 
  Twitch, 
  ShoppingBag,
  Trophy,
  Users,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Close mobile menu when changing routes
    setMobileMenuOpen(false);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 lg:px-8",
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 mr-8">
            <GamepadIcon className="h-8 w-8 text-primary animate-pulse-neon" />
            <span className="font-bold text-xl font-['Orbitron'] tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              NEXUS
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive("/")}`}>
              <div className="flex items-center gap-1">
                <Home className="h-4 w-4 mr-1" />
                <span>Games</span>
              </div>
            </Link>
            <Link to="/live" className={`nav-link ${isActive("/live")}`}>
              <div className="flex items-center gap-1">
                <Twitch className="h-4 w-4 mr-1" />
                <span>Live</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </div>
            </Link>
            <Link to="/store" className={`nav-link ${isActive("/store")}`}>
              <div className="flex items-center gap-1">
                <ShoppingBag className="h-4 w-4 mr-1" />
                <span>Store</span>
              </div>
            </Link>
            <Link to="/esports" className={`nav-link ${isActive("/esports")}`}>
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4 mr-1" />
                <span>Esports</span>
              </div>
            </Link>
            <Link to="/community" className={`nav-link ${isActive("/community")}`}>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 mr-1" />
                <span>Community</span>
              </div>
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search games..."
              className="bg-muted/50 px-4 py-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm w-40 lg:w-64 transition-all duration-300 focus:w-72"
            />
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative text-muted-foreground hover:text-primary transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">3</span>
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu with improved animations and styling */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg animate-slide-down border-t border-white/10">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/") ? "bg-primary/20 text-primary" : "hover:bg-white/5"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Games</span>
            </Link>
            <Link 
              to="/live" 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/live") ? "bg-primary/20 text-primary" : "hover:bg-white/5"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Twitch className="h-5 w-5" />
              <span>Live</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </Link>
            <Link 
              to="/store" 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/store") ? "bg-primary/20 text-primary" : "hover:bg-white/5"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Store</span>
            </Link>
            <Link 
              to="/esports" 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/esports") ? "bg-primary/20 text-primary" : "hover:bg-white/5"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Trophy className="h-5 w-5" />
              <span>Esports</span>
            </Link>
            <Link 
              to="/community" 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/community") ? "bg-primary/20 text-primary" : "hover:bg-white/5"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Users className="h-5 w-5" />
              <span>Community</span>
            </Link>
            <div className="relative mt-3 pb-2 border-t border-white/10 pt-4">
              <input
                type="text"
                placeholder="Search games..."
                className="bg-muted w-full px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              />
              <Search className="h-4 w-4 absolute left-3 top-[calc(50%+2px)] -translate-y-1/2 text-muted-foreground" />
            </div>
            <div className="flex justify-between pt-2 border-t border-white/10">
              <button className="relative text-muted-foreground hover:text-primary transition-colors p-2">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">3</span>
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors p-2">
                <User className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
