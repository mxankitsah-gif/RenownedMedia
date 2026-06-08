import { Megaphone, Camera, Palette, Laptop, Coins, BarChart3, Compass } from 'lucide-react';

export default function ServiceIcon({ id, className = "w-5 h-5" }: { id: string, className?: string }) {
  switch (id) {
    case 'digital-marketing':
      return <Megaphone className={className} />;
    case 'content-production':
      return <Camera className={className} />;
    case 'design-branding':
      return <Palette className={className} />;
    case 'website-development':
      return <Laptop className={className} />;
    case 'paid-advertising':
      return <Coins className={className} />;
    case 'analytics-reporting':
      return <BarChart3 className={className} />;
    default:
      return <Compass className={className} />;
  }
}
