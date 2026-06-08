/**
 * Copyright 2026 Renowned Media
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, ArrowRight, ArrowLeft, Calendar, Tag, RefreshCw } from 'lucide-react';
import { ActiveTab } from '../types';

interface BlogViewProps {
  onTabChange: (tab: ActiveTab) => void;
  onRequestQuote: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  publishedDate: string;
  excerpt: string;
  link: string;
  image: string | null;
  categories: string[];
}

export default function BlogView({ onTabChange, onRequestQuote }: BlogViewProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const callbackName = `blogger_jsonp_callback_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    setLoading(true);
    setError(null);

    // Timeout safety fallback
    const timeoutId = setTimeout(() => {
      if (active) {
        setLoading(false);
        setError('timeout');
      }
    }, 8500);

    // Define the global JSONP callback handler
    (window as any)[callbackName] = (data: any) => {
      clearTimeout(timeoutId);
      if (!active) {
        cleanup();
        return;
      }

      try {
        const entries = data.feed?.entry || [];
        const parsed: BlogPost[] = entries.map((entry: any, idx: number) => {
          const id = entry.id?.$t || `post-${idx}`;
          const title = entry.title?.$t || 'Untitled Insight';
          
          let publishedDate = 'Recent Update';
          if (entry.published?.$t) {
            try {
              publishedDate = new Date(entry.published.$t).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
            } catch {
              // Safe fallback
            }
          }

          const rawContent = entry.content?.$t || entry.summary?.$t || '';
          
          // Clean & format text excerpt
          const cleanText = rawContent
            .replace(/<[^>]*>/g, ' ') // Strip markup tags
            .replace(/\s+/g, ' ') // Normalize spaces
            .trim();
          
          // Create short excerpt
          const excerpt = cleanText.length > 180 ? cleanText.slice(0, 180) + '...' : cleanText;

          // Article deep-link
          const link = entry.link?.find((l: any) => l.rel === 'alternate')?.href || 'https://renownedmedia.blogspot.com';

          // Subject labels
          const categories = entry.category?.map((c: any) => c.term).filter(Boolean) || [];

          // Image extraction & transformation to high resolution (e.g. s1600 replaces standard small s72-c)
          let image = null;
          if (entry.media$thumbnail?.url) {
            image = entry.media$thumbnail.url
              .replace(/\/s72-c(-[a-z]+)?\//, '/s1600/')
              .replace(/=s72-c/, '=s1600');
          } else {
            // Backup scrapper regex for inline image inside content string
            const imgMatch = rawContent.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch && imgMatch[1]) {
              image = imgMatch[1];
            }
          }

          return {
            id,
            title,
            publishedDate,
            excerpt,
            link,
            image,
            categories,
          };
        });

        setPosts(parsed);
      } catch (err: any) {
        console.error('Error parsing Blogger response:', err);
        setError('parse_error');
      } finally {
        setLoading(false);
      }
      cleanup();
    };

    // Instantiate and inject the JSONP script
    const script = document.createElement('script');
    script.src = `https://renownedmedia.blogspot.com/feeds/posts/default?alt=json-in-script&callback=${callbackName}`;
    script.async = true;

    script.onerror = () => {
      clearTimeout(timeoutId);
      if (active) {
        setError('network_error');
        setLoading(false);
      }
      cleanup();
    };

    document.body.appendChild(script);

    function cleanup() {
      try {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      } catch {
        // Safe skip
      }
      try {
        delete (window as any)[callbackName];
      } catch {
        // Safe skip
      }
    }

    return () => {
      active = false;
      clearTimeout(timeoutId);
      cleanup();
    };
  }, []);

  return (
    <div className="py-20 md:py-28 max-w-7xl mx-auto px-6 text-[#BFB9AF] space-y-16 animate-fade-in" id="renowned-blog-section">
      
      {/* HUD Navigation Strip */}
      <div className="flex items-center justify-between border-b border-[#D4AF37]/15 pb-6">
        <button
          onClick={() => onTabChange('home')}
          className="px-4 py-2 bg-white/[0.02] border border-[#BFB9AF]/20 hover:border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 transition-all rounded text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer"
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back Home
        </button>
        
        <span className="font-mono text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase bg-[#D4AF37]/10 px-3 py-1 rounded-full">
          Live Publication Feed
        </span>
      </div>

      {/* Hero Landing CTA Card */}
      <div className="relative bg-gradient-to-b from-[#111111]/90 to-black/90 border border-[#D4AF37]/25 rounded-2xl p-8 md:p-16 text-center space-y-8 overflow-hidden shadow-[0_20px_50px_rgba(212,175,55,0.05)]">
        {/* Subtle background blur circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4AF37]/4 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-5">
          <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/35 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#D4AF37]/5">
            <BookOpen className="w-7 h-7 stroke-[1.5]" />
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Renowned Official Blog
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#BFB9AF] leading-relaxed">
            Read our latest SEO guides, digital marketing insights and growth strategies.
          </p>

          <div className="pt-4">
            <a
              href="https://renownedmedia.blogspot.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-[#D4AF37] text-black border border-[#D4AF37]/30 hover:border-[#D4AF37] px-10 py-5 rounded font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_4px_25px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.25)] cursor-pointer"
              id="visit-blog-main-btn"
            >
              Read Our Blog <ExternalLink className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Blog Content Stage */}
      <div className="space-y-10">
        
        {/* State 1: Loading skeleton screen */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div 
                key={n} 
                className="bg-[#111111]/40 border border-[#D4AF37]/10 rounded-xl overflow-hidden p-6 space-y-6 animate-pulse"
              >
                <div className="w-full h-48 bg-white/[0.03] rounded-lg" />
                <div className="space-y-3">
                  <div className="h-4 bg-white/[0.04] rounded w-1/3" />
                  <div className="h-6 bg-white/[0.05] rounded w-3/4" />
                  <div className="h-4 bg-white/[0.03] rounded w-full" />
                  <div className="h-4 bg-white/[0.03] rounded w-5/6" />
                </div>
                <div className="h-10 bg-white/[0.03] rounded w-1/2 pt-2" />
              </div>
            ))}
          </div>
        )}

        {/* State 2: Error fallback state */}
        {!loading && error && (
          <div className="bg-gradient-to-b from-[#111111] to-black border border-[#D4AF37]/20 rounded-xl p-8 md:p-12 text-center max-w-lg mx-auto space-y-6 shadow-[0_10px_35px_rgba(212,175,55,0.02)]">
            <div className="w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <BookOpen className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-serif font-extrabold text-xl tracking-tight">Visit Our Official Blog</h3>
              <p className="text-xs text-[#BFB9AF] leading-relaxed max-w-sm mx-auto">
                Read our latest expert-level insights, SEO directories, and performance marketing analyses directly on the publisher platform.
              </p>
            </div>
            <div className="pt-2 mx-auto">
              <a
                href="https://renownedmedia.blogspot.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-[#D4AF37] text-black border border-[#D4AF37]/25 hover:border-[#D4AF37] px-8 py-4 rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(212,175,55,0.2)] cursor-pointer"
                id="error-fallback-link-btn"
              >
                Access Official Blog <ExternalLink className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>
        )}

        {/* State 3: Successfully parsed live feeds */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="group bg-black/40 border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(212,175,55,0.08)] transform hover:-translate-y-1"
                style={{ minHeight: '480px' }}
                id={`article-card-${post.id}`}
              >
                {/* Featured Image Frame */}
                <div className="relative h-48 overflow-hidden bg-[#111111] shrink-0 border-b border-[#D4AF37]/10">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    // Aesthetic vector fallback with glowing abstract geometry
                    <div className="w-full h-full bg-gradient-to-br from-[#111111] to-[#050505] flex items-center justify-center p-6 text-center text-[#D4AF37]/10 relative">
                      <BookOpen className="w-20 h-20 opacity-10 stroke-[1.25]" />
                      <div className="absolute inset-0 bg-[#D4AF37]/[0.02] backdrop-blur-3xl" />
                    </div>
                  )}
                  {post.categories.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[calc(100%-2rem)]">
                      {post.categories.slice(0, 2).map((cat, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="bg-black/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/35 text-[8.5px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md inline-flex items-center gap-1"
                        >
                          <Tag className="w-2.5 h-2.5" /> {cat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Article Header & Excerpt */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3 text-left">
                    {/* Timestamp line */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#BFB9AF]/60">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{post.publishedDate}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-sans font-extrabold text-base text-white tracking-tight leading-snug group-hover:text-[#D4AF37] transition-colors duration-200 line-clamp-2">
                      <a href={post.link} target="_blank" rel="noreferrer" className="hover:underline">
                        {post.title}
                      </a>
                    </h3>

                    {/* Excerpt text summary */}
                    <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More dynamic launch alignment */}
                  <div className="pt-4 border-t border-[#D4AF37]/10 text-left">
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center bg-white/[0.02] group-hover:bg-[#D4AF37] text-white group-hover:text-black border border-[#D4AF37]/20 group-hover:border-[#D4AF37] py-2.5 rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-1.5 cursor-pointer"
                      id={`read-article-btn-${post.id}`}
                    >
                      Read Article <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* State 4: Synchronized but empty feed */}
        {!loading && !error && posts.length === 0 && (
          <div className="bg-[#111111]/40 border border-dashed border-[#D4AF37]/25 rounded-2xl p-16 text-center max-w-xl mx-auto space-y-4">
            <BookOpen className="w-12 h-12 text-[#D4AF37]/40 mx-auto stroke-[1.25]" />
            <div className="space-y-1">
              <p className="text-white font-bold font-sans text-base">Feed Currently Synced & Empty</p>
              <p className="text-xs text-[#BFB9AF]/70 max-w-xs mx-auto">
                No active articles were returned from the Blogger endpoint. Check back soon for fresh SEO and growth strategies.
              </p>
            </div>
            <div className="pt-2">
              <a 
                href="https://renownedmedia.blogspot.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-mono hover:underline font-bold"
              >
                View Hub Directly <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Call to Action Footer */}
      <div className="bg-[#111111]/70 border border-[#D4AF37]/15 rounded-xl p-8 text-center space-y-6">
        <h3 className="font-sans text-lg font-extrabold text-white">Need a Dedicated Growth & Authority Plan?</h3>
        <p className="font-sans text-xs text-[#BFB9AF] max-w-xl mx-auto leading-relaxed">
          Unlock maximum impact campaigns. Get in touch to configure custom local content calendars, targeted search strategies, and fully managed growth systems.
        </p>
        <div>
          <button
            onClick={onRequestQuote}
            className="bg-transparent hover:bg-[#D4AF37]/10 text-white border border-[#D4AF37]/45 hover:border-[#D4AF37] px-8 py-3.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
            id="blog-request-consultation-btn"
          >
            Consult Our Team <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>

    </div>
  );
}
