
import { ArrowRight } from "lucide-react";
import { liveStreams } from "@/lib/gameData";

const LiveStreams = () => {
  return (
    <section className="content-section">
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-heading">Live Streams</h2>
        <a href="#" className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          <span>View All</span>
          <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {liveStreams.map((stream) => (
          <div key={stream.id} className="premium-card overflow-hidden group">
            <div className="relative">
              <img 
                src={stream.thumbnailUrl} 
                alt={stream.title} 
                className="w-full aspect-video object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {stream.live && (
                <div className="absolute top-3 left-3 bg-red-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <div className="relative flex h-2 w-2 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </div>
                  LIVE
                </div>
              )}
              
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M8.4 8.5a3.5 3.5 0 0 1 7 .5"></path>
                </svg>
                {stream.viewers.toLocaleString()}
              </div>
              
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium line-clamp-1">{stream.title}</h3>
                  <div className="text-sm text-muted-foreground">{stream.streamer}</div>
                </div>
                <span className="game-tag">{stream.game}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveStreams;
