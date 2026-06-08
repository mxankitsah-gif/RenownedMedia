import { Film, Search, Megaphone, TrendingUp, Camera, Compass } from 'lucide-react';

export default function ServiceIcon({ id, className = "w-5 h-5" }: { id: string, className?: string }) {
  switch (id) {
    case 'video-editing':
      return <Film className={className} />;
    case 'seo-strategy':
      return <Search className={className} />;
    case 'digital-marketing':
      return <Megaphone className={className} />;
    case 'social-media':
      return <TrendingUp className={className} />;
    case 'content-production':
      return <Camera className={className} />;
    case 'brand-strategy':
      return <Compass className={className} />;
    default:
      return <Compass className={className} />;
  }
}
