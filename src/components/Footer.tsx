
import { Link } from "react-router-dom";
import { GamepadIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <GamepadIcon className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-['Orbitron'] tracking-wider">NEXUS</span>
            </Link>
            <p className="text-sm text-white/60 mb-6">
              Your ultimate destination for everything gaming, from the latest releases to live esports events.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Twitch">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <path d="M7.5 7.2c.33-.35.67-.7 1-.86 1.13-.6 2.3-.95 3.5-1.1 1.2-.15 2.47-.15 3.5.1 1.03.25 2 .7 3 1.4.4.28.8.7 1.26 1.26M8 17.8c-1.1-.1-2.2-.5-3.3-1.3C3.5 15.7 3 14.5 3 13.2v-4c0-1.4.6-2.8 1.5-3.7A5.7 5.7 0 0 1 8 4a7 7 0 0 1 8 0c1.1.7 2 1.8 2.5 3.5.5 1.7.5 3 .5 4 0 1.4-.5 2.7-1.5 3.8-.7.7-1.7 1.3-2.6 1.6-.9.3-1.9.6-2.9.7"></path>
                  <path d="M8 20v-4"></path>
                  <path d="M16 20v-4"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Navigation</h3>
            <ul className="space-y-2 text-white/60">
              <li><Link to="/" className="hover:text-primary transition-colors">Games</Link></li>
              <li><Link to="/live" className="hover:text-primary transition-colors">Live Streams</Link></li>
              <li><Link to="/store" className="hover:text-primary transition-colors">Store</Link></li>
              <li><Link to="/esports" className="hover:text-primary transition-colors">Esports</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Support</h3>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Newsletter</h3>
            <p className="text-sm text-white/60 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
              />
              <button type="submit" className="w-full btn-primary">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <div>© 2024 NEXUS Gaming. All rights reserved.</div>
          <div className="mt-4 md:mt-0">
            Designed with <span className="text-red-500">❤</span> for gamers worldwide
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
