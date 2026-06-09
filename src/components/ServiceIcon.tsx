import { Megaphone, Video, Palette, Search, Share2, Award, TrendingUp, Compass } from 'lucide-react';

export default function ServiceIcon({ id, className = "w-5 h-5" }: { id: string, className?: string }) {
  switch (id) {
    case 'social-media-management':
      return <Share2 className={className} />;
    case 'content-production':
      return <Video className={className} />;
    case 'performance-marketing':
      return <TrendingUp className={className} />;
    case 'political-campaigns':
      return <Award className={className} />;
    case 'seo-website':
      return <Search className={className} />;
    case 'public-relations':
      return <Megaphone className={className} />;
    case 'branding-design':
      return <Palette className={className} />;
    default:
      return <Compass className={className} />;
  }
}
