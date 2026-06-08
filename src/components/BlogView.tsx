/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Plus, Edit3, Trash2, Globe, Eye, ArrowLeft, ArrowRight, Save, 
  Sparkles, CheckCircle2, ChevronRight, Settings, Code, Layers, MessageSquare, AlertCircle
} from 'lucide-react';
import { BlogPost, ActiveTab } from '../types';

interface BlogViewProps {
  onTabChange: (tab: ActiveTab) => void;
  onRequestQuote: () => void;
}

const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How Indian Creators are Unlocking Dynamic Reach with Micro-Reels',
    slug: 'indian-creators-dynamic-reach',
    category: 'Content Strategy',
    featuredImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    content: `Micro-reels and shorts have completely reshaped how Indian consumers consume visual storytelling. To captivate viewers in Ghaziabad, Mumbai, and Delhi NCR, brands must master fast pacing, cinematic transitions, and localized color grading structures.\n\n### Why High-Vibrancy Content Matters\nDigital audience attention spans are now shorter than ever before. With average watch sessions peaking at 7 seconds, immediate visual hooks are mandatory.\n\n### Your Tactical Plan:\n1. Hook them in the first 1.5 seconds with tight text.\n2. Leverage authentic, non-stock background clips.\n3. Include a definitive Call-to-Action to your service page.`,
    seoTitle: 'Indian Creators Video Growth Blueprint | Renowned Media',
    metaDesc: 'Discover how top Indian creators and startups scale dynamic engagement with micro-reels, mobile video production, and high-energy motion design.',
    status: 'published',
    createdAt: '2026-06-01'
  },
  {
    id: '2',
    title: 'Ghaziabad & Delhi NCR Local SEO Guide for SME Growth',
    slug: 'delhi-ncr-local-seo-guide-sme',
    category: 'Local SEO',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    content: `Local search engines are the virtual storefronts for Indian local businesses, coaches, and consultants. Having an optimized Google Map or local scheme page drives high-intent foot traffic without costly digital paid advertising.\n\n### The Core Search Bottlenecks\nMany SMEs fail local search parameters because of duplicate coordinates, missing phone vectors, and a complete absence of local keyword silos.\n\n### 3 Optimization Actions:\n- Align your Name, Address, and Phone perfectly everywhere.\n- Target geo-localized keyphrases like 'Best marketing agency in Indirapuram'.\n- Solicit continuous high-fidelity feedback from historical clients.`,
    seoTitle: 'Local SEO Playbook for Delhi NCR & Ghaziabad SMEs',
    metaDesc: 'Establish durable organic search ranking, optimize local map listings, and drive high-fidelity consumer traffic to Ghaziabad & NCR stores.',
    status: 'published',
    createdAt: '2026-06-05'
  }
];

export default function BlogView({ onTabChange, onRequestQuote }: BlogViewProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [activeSubView, setActiveSubView] = useState<'feed' | 'studio' | 'read'>('feed');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Studio Editor state
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editSlug, setEditSlug] = useState('');
  const [editCategory, setEditCategory] = useState('Content Strategy');
  const [editFeaturedImage, setEditFeaturedImage] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editSeoTitle, setEditSeoTitle] = useState('');
  const [editMetaDesc, setEditMetaDesc] = useState('');
  const [editStatus, setEditStatus] = useState<'draft' | 'published'>('published');
  
  const categoriesList = ['Content Strategy', 'Local SEO', 'Growth Marketing', 'Brand Strategy', 'Cinematography'];

  // Load from local storage or set initial values safely
  useEffect(() => {
    const saved = localStorage.getItem('renowned_blog_posts');
    if (saved) {
      try {
        setBlogs(JSON.parse(saved));
      } catch (e) {
        setBlogs(INITIAL_POSTS);
      }
    } else {
      setBlogs(INITIAL_POSTS);
      localStorage.setItem('renowned_blog_posts', JSON.stringify(INITIAL_POSTS));
    }
  }, []);

  const saveToLocalStorage = (updatedBlogs: BlogPost[]) => {
    setBlogs(updatedBlogs);
    localStorage.setItem('renowned_blog_posts', JSON.stringify(updatedBlogs));
  };

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setEditTitle(val);
    if (!editId) {
      setEditSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .slice(0, 50)
      );
    }
  };

  // Open Editor for new post
  const handleInitNewPost = () => {
    setEditId(null);
    setEditTitle('');
    setEditSlug('');
    setEditCategory('Content Strategy');
    setEditFeaturedImage('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80');
    setEditContent('');
    setEditSeoTitle('');
    setEditMetaDesc('');
    setEditStatus('published');
    setIsEditing(true);
    setActiveSubView('studio');
  };

  // Open Editor for edit post
  const handleInitEditPost = (post: BlogPost) => {
    setEditId(post.id);
    setEditTitle(post.title);
    setEditSlug(post.slug);
    setEditCategory(post.category);
    setEditFeaturedImage(post.featuredImage);
    setEditContent(post.content);
    setEditSeoTitle(post.seoTitle);
    setEditMetaDesc(post.metaDesc);
    setEditStatus(post.status);
    setIsEditing(true);
    setActiveSubView('studio');
  };

  // Save Post to collection
  const handleSavePost = (e: FormEvent) => {
    e.preventDefault();
    if (!editTitle.trim() || !editContent.trim()) {
      alert('Title and Content fields are mandatory');
      return;
    }

    const finalSeoTitle = editSeoTitle.trim() || `${editTitle} | Renowned Blog`;
    const finalMetaDesc = editMetaDesc.trim() || editContent.slice(0, 150) + '...';

    let updatedList: BlogPost[] = [];

    if (editId) {
      // Edit existing
      updatedList = blogs.map(b => 
        b.id === editId 
          ? {
              ...b,
              title: editTitle,
              slug: editSlug || 'post-' + Date.now(),
              category: editCategory,
              featuredImage: editFeaturedImage,
              content: editContent,
              seoTitle: finalSeoTitle,
              metaDesc: finalMetaDesc,
              status: editStatus,
            }
          : b
      );
    } else {
      // Create new
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: editTitle,
        slug: editSlug || 'post-' + Date.now(),
        category: editCategory,
        featuredImage: editFeaturedImage,
        content: editContent,
        seoTitle: finalSeoTitle,
        metaDesc: finalMetaDesc,
        status: editStatus,
        createdAt: new Date().toISOString().split('T')[0]
      };
      updatedList = [newPost, ...blogs];
    }

    saveToLocalStorage(updatedList);
    setIsEditing(false);
    setActiveSubView('studio');
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Delete this blog post? It will vanish from the database.')) {
      const updated = blogs.filter(b => b.id !== id);
      saveToLocalStorage(updated);
    }
  };

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
    setActiveSubView('read');
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-6">
      
      {/* 2-Way Switcher Panel / Luxury HUD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#D4AF37]/15 pb-6">
        <div className="space-y-1">
          <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Elite Corporate Content Hub
          </span>
          <h2 className="font-sans text-3xl font-extrabold text-white">
            Renowned <span className="text-[#D4AF37]">Insights & CMS</span>
          </h2>
          <p className="font-sans text-xs text-[#BFB9AF]">
            Real-time insights and professional content management optimized for Ghaziabad startups, coaches, & creators.
          </p>
        </div>

        {/* View togglers styled styled with exquisite black/gold outline */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setActiveSubView('feed');
              setIsEditing(false);
            }}
            className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeSubView === 'feed' || activeSubView === 'read'
                ? 'bg-[#D4AF37] text-black border border-[#D4AF37]'
                : 'bg-white/[0.02] text-white hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20 hover:border-[#D4AF37]'
            }`}
            id="btn-subview-feed"
          >
            📰 Read Articles
          </button>
          <button
            onClick={() => {
              setActiveSubView('studio');
              setIsEditing(false);
            }}
            className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              activeSubView === 'studio' && !isEditing
                ? 'bg-[#D4AF37] text-black border border-[#D4AF37]'
                : 'bg-white/[0.02] text-white hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20 hover:border-[#D4AF37]'
            }`}
            id="btn-subview-studio"
          >
            <Settings className="w-3.5 h-3.5" /> Sanity Studio CMS
          </button>
        </div>
      </div>

      {/* ----------------- SUBVIEW A: BLOG FEED LIBRARIES ----------------- */}
      {(activeSubView === 'feed') && (
        <div className="space-y-12">
          {/* Main Featured Banner */}
          {blogs.filter(b => b.status === 'published').length > 0 ? (
            (() => {
              const bFeed = blogs.filter(b => b.status === 'published');
              const featured = bFeed[0];
              return (
                <div 
                  className="bg-white/[0.02] backdrop-blur-md rounded-2xl border border-[#D4AF37]/15 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-[#D4AF37]/45 transition-all duration-500 group"
                  id="featured-blog-anchor"
                >
                  <div className="lg:col-span-7 h-64 lg:h-auto overflow-hidden bg-[#141414] relative">
                    <img 
                      src={featured.featuredImage} 
                      alt={featured.title} 
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-black/85 border border-[#D4AF37]/35 text-[#D4AF37] font-mono text-[9px] px-3 py-1 uppercase rounded tracking-widest font-bold">
                      {featured.category}
                    </div>
                  </div>
                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4 text-left">
                      <span className="font-mono text-[10px] text-[#D4AF37] tracking-widest uppercase font-bold">{featured.createdAt} · FEATURED STORY</span>
                      <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white leading-tight hover:text-[#D4AF37] transition-all">
                        {featured.title}
                      </h3>
                      <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed">
                        {featured.metaDesc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#D4AF37]/10 flex justify-between items-center">
                      <button
                        onClick={() => handleReadPost(featured)}
                        className="text-[#D4AF37] text-xs font-mono font-bold tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
                        id={`btn-read-featured-${featured.id}`}
                      >
                        READ FULL CASE STUDY <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="text-center py-16 bg-[#0a0a0a]/50 border border-dashed border-[#D4AF37]/15 rounded-xl space-y-4">
              <AlertCircle className="w-12 h-12 text-[#D4AF37]/40 mx-auto" />
              <p className="font-sans text-sm text-[#BFB9AF]">No published blogs found. Head to Sanity CMS panel to post articles live!</p>
            </div>
          )}

          {/* Grid list of remaining posted content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs
              .filter(b => b.status === 'published')
              .slice(1)
              .map((post) => (
                <div 
                  key={post.id}
                  className="bg-white/[0.012] backdrop-blur-md rounded-xl border border-[#D4AF37]/15 overflow-hidden group hover:border-[#D4AF37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all duration-300 flex flex-col justify-between"
                  id={`blog-card-${post.id}`}
                >
                  <div className="h-48 overflow-hidden bg-[#121212] relative">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500 hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a0a0a]/90 text-[#D4AF37] border border-[#D4AF37]/30 text-[9px] font-mono px-2.5 py-0.5 rounded tracking-wider uppercase font-bold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] text-[#BFB9AF] tracking-wider block font-bold uppercase">{post.createdAt}</span>
                      <h4 className="font-sans text-base font-extrabold text-white leading-snug hover:text-[#D4AF37] transition-all line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="font-sans text-xs text-[#BFB9AF]/85 line-clamp-3 leading-relaxed">
                        {post.metaDesc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#D4AF37]/10 flex justify-between items-center">
                      <button
                        onClick={() => handleReadPost(post)}
                        className="text-[#D4AF37] hover:text-[#F5D76E] text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1 cursor-pointer"
                        id={`btn-read-${post.id}`}
                      >
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* CTA Growth routine bottom */}
          <div className="bg-gradient-to-r from-white/[0.01] to-[#D4AF37]/[0.02] border border-[#D4AF37]/15 rounded-xl p-8 text-center space-y-6">
            <h3 className="font-sans text-xl font-extrabold text-white">Need a targeted SEO & Marketing Content Machine?</h3>
            <p className="font-sans text-xs text-[#BFB9AF] max-w-xl mx-auto leading-relaxed">
              We align strategy & production so Indian startups, local service players, coaches, & brands build maximum domain leverage. Set up your bespoke Growth program now.
            </p>
            <button
              onClick={onRequestQuote}
              className="bg-white hover:bg-[#D4AF37] text-black border border-[#D4AF37]/30 hover:border-[#D4AF37] px-8 py-3.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
              id="newsfeed-quote-btn"
            >
              Consult On-Page Authority Strategy
            </button>
          </div>
        </div>
      )}

      {/* ----------------- SUBVIEW B: INDEPENDENT SANITY CMS DASHBOARD ----------------- */}
      {(activeSubView === 'studio') && (
        <div className="space-y-8">
          
          {/* Main CMS Header Info and Actions */}
          {!isEditing ? (
            <div className="bg-white/[0.02] border border-[#D4AF37]/15 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 border-b border-[#D4AF37]/10 pb-5">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 px-2.5 py-1 rounded-sm uppercase tracking-widest flex items-center gap-1">
                    <Code className="w-3 h-3" /> SANITY STUDIO INTUITIVE SUITE
                  </span>
                  <h3 className="font-sans text-xl font-extrabold text-white">Dynamic Post Archives</h3>
                  <p className="font-sans text-xs text-[#BFB9AF]">
                    Manage real-time articles, live SEO metadata parameters, and track layout publishing state.
                  </p>
                </div>
                <button
                  onClick={handleInitNewPost}
                  className="bg-[#D4AF37] hover:bg-[#F5D76E] text-black px-5 py-2.5 rounded font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                  id="btn-cms-create-post"
                >
                  <Plus className="w-4 h-4" /> Create Live Post
                </button>
              </div>

              {/* Grid or Table layout of dynamic documents */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-xs font-sans text-left">
                  <thead>
                    <tr className="border-b border-[#D4AF37]/20 text-[#D4AF37] font-mono tracking-wider font-bold uppercase">
                      <th className="py-3 px-4">Featured Image</th>
                      <th className="py-3 px-4">Title & Slug</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4 text-center">Status</th>
                      <th className="py-3 px-4">Date Added</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D4AF37]/10">
                    {blogs.map((b) => (
                      <tr 
                        key={b.id} 
                        className="hover:bg-white/[0.015] transition-all group"
                        id={`cms-record-row-${b.id}`}
                      >
                        {/* Cell 1: Thumbnail */}
                        <td className="py-4 px-4 w-20">
                          <div className="w-14 h-10 rounded border border-[#D4AF37]/20 bg-[#121212] overflow-hidden">
                            <img 
                              src={b.featuredImage} 
                              alt="Thumbnail" 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </td>
                        {/* Cell 2: Title and Slug */}
                        <td className="py-4 px-4 max-w-xs">
                          <div className="font-sans font-bold text-white group-hover:text-[#D4AF37] transition-all leading-snug">
                            {b.title}
                          </div>
                          <div className="font-mono text-[9px] text-[#BFB9AF] mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                            /{b.slug}
                          </div>
                        </td>
                        {/* Cell 3: Category */}
                        <td className="py-4 px-4">
                          <span className="bg-[#D4AF37]/10 text-[#D4AF37] font-mono text-[10px] px-2 py-0.5 rounded border border-[#D4AF37]/15">
                            {b.category}
                          </span>
                        </td>
                        {/* Cell 4: Status Indicator */}
                        <td className="py-4 px-4 text-center">
                          {b.status === 'published' ? (
                            <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider font-mono uppercase">
                              ● Live Active
                            </span>
                          ) : (
                            <span className="bg-[#1a1a1a] text-[#BFB9AF] border border-[#BFB9AF]/20 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider font-mono uppercase">
                              ○ Draft/Hidden
                            </span>
                          )}
                        </td>
                        {/* Cell 5: Date */}
                        <td className="py-4 px-4 font-mono text-[10px] text-[#BFB9AF]">
                          {b.createdAt}
                        </td>
                        {/* Cell 6: Action Buttons */}
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2.5">
                            <button
                              onClick={() => handleInitEditPost(b)}
                              className="hover:text-white text-[#D4AF37] p-1.5 rounded hover:bg-[#D4AF37]/10 transition-all cursor-pointer"
                              title="Edit in CMS editor"
                              id={`cms-edit-btn-${b.id}`}
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleReadPost(b)}
                              className="hover:text-[#D4AF37] text-[#BFB9AF] p-1.5 rounded hover:bg-white/[0.04] transition-all cursor-pointer"
                              title="Preview Content Layout"
                              id={`cms-preview-btn-${b.id}`}
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeletePost(b.id)}
                              className="hover:text-red-400 text-[#BFB9AF] p-1.5 rounded hover:bg-red-500/10 transition-all cursor-pointer"
                              title="Delete Post"
                              id={`cms-delete-btn-${b.id}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            
            /* ----------------- CORE POST EDITOR INTERACTIVE WORKSPACE ----------------- */
            <div className="bg-white/[0.02] border border-[#D4AF37]/15 rounded-xl p-6 sm:p-8 space-y-8 text-left">
              
              {/* Editor HUD header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#D4AF37]/10 pb-5">
                <div className="space-y-1">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="text-xs text-[#D4AF37] hover:text-[#F5D76E] inline-flex items-center gap-1 font-mono uppercase tracking-wider mb-2 cursor-pointer"
                    id="editor-btn-back"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back to Dashboard
                  </button>
                  <h3 className="font-sans text-lg font-extrabold text-white">
                    {editId ? 'Modify Schema: ' + editTitle : 'Orchestrate New Blog Post'}
                  </h3>
                  <p className="font-sans text-xs text-[#BFB9AF]">
                    Add customized category mappings, featured imaging layouts, content markup & instant SEO settings.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-transparent hover:bg-white/5 border border-[#BFB9AF]/25 text-white px-4 py-2.5 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    id="btn-cancel-post"
                  >
                    Cancel Changes
                  </button>
                  <button
                    onClick={handleSavePost}
                    className="bg-[#D4AF37] hover:bg-[#F5D76E] text-black px-5 py-2.5 rounded font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95"
                    id="btn-save-post"
                  >
                    <Save className="w-4 h-4" /> Save & Launch
                  </button>
                </div>
              </div>

              {/* Main Fields Form Grid */}
              <form onSubmit={handleSavePost} className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-sans text-white">
                
                {/* Left column: Prime content */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Title field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#BFB9AF] uppercase tracking-wider">
                      Post Title <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Scaling Ghaziabad Manufacturing with Organic Search Authority"
                      value={editTitle}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-3 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none bg-[#090909] text-white text-sm"
                      id="editor-title-field"
                    />
                    <p className="text-[10px] text-[#BFB9AF]/65">Provide a high-relevance title targeting Indian client needs.</p>
                  </div>

                  {/* Slug & Category Mapping */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#BFB9AF] uppercase tracking-wider">
                        Slug (URL identifier)
                      </label>
                      <input 
                        type="text" 
                        placeholder="optimized-growth-blueprint"
                        value={editSlug}
                        onChange={(e) => setEditSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                        className="w-full px-3 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none bg-[#090909] text-white font-mono text-xs"
                        id="editor-slug-field"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#BFB9AF] uppercase tracking-wider">
                        Business Category Segment <span className="text-red-400">*</span>
                      </label>
                      <select 
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                        className="w-full px-3 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none bg-[#090909] text-white select-none text-xs"
                        id="editor-category-field"
                      >
                        {categoriesList.map((cat, ci) => (
                          <option key={ci} value={cat} className="bg-[#0c0c0c]">{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Main Rich text markup space */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="block text-xs font-bold text-[#BFB9AF] uppercase tracking-wider">
                        Core Article Body (Markdown supported) <span className="text-red-400">*</span>
                      </label>
                      <span className="font-mono text-[9px] text-[#D4AF37] uppercase font-semibold">Live Preview Active Below</span>
                    </div>
                    <textarea 
                      required
                      rows={14}
                      placeholder="Use Markdown titles, item lists and content scripts to build search-optimized value mappings..."
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full px-3 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none bg-[#090909] text-white font-mono text-xs leading-relaxed"
                      id="editor-content-field"
                    />
                  </div>

                  {/* Immediate live preview of content inside editor */}
                  <div className="bg-[#050505] p-5 rounded-lg border border-[#D4AF37]/10 space-y-3">
                    <h5 className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-wider font-bold">Post Preview Outline</h5>
                    {editContent ? (
                      <div className="prose prose-invert prose-xs text-xs font-sans text-[#BFB9AF] leading-relaxed max-h-48 overflow-y-auto space-y-2 whitespace-pre-wrap">
                        {editContent}
                      </div>
                    ) : (
                      <p className="font-sans text-xs italic text-[#BFB9AF]/50">Start composing your markup to verify layout presentation live.</p>
                    )}
                  </div>

                </div>

                {/* Right Column: Custom Featured Imaging and Professional SEO Configurations */}
                <div className="lg:col-span-4 space-y-6 border-l lg:border-l lg:pl-6 border-[#D4AF37]/10">
                  
                  {/* Status Picker Widget */}
                  <div className="bg-white/[0.015] p-4 rounded-lg border border-[#D4AF37]/10 space-y-3">
                    <label className="block text-xs font-bold text-white uppercase tracking-wider">
                      Publishing State
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setEditStatus('published')}
                        className={`py-2 rounded font-mono text-[10px] font-bold uppercase transition-all tracking-wider cursor-pointer ${
                          editStatus === 'published'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-400/40 shadow-sm'
                            : 'bg-black/50 text-[#BFB9AF] border border-transparent hover:bg-black/80'
                        }`}
                      >
                        ● LIVE ACTIVE
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditStatus('draft')}
                        className={`py-2 rounded font-mono text-[10px] font-bold uppercase transition-all tracking-wider cursor-pointer ${
                          editStatus === 'draft'
                            ? 'bg-[#1a1a1a] text-white border border-[#D4AF37]/45'
                            : 'bg-black/50 text-[#BFB9AF] border border-transparent hover:bg-black/80'
                        }`}
                      >
                        ○ DRAFT
                      </button>
                    </div>
                  </div>

                  {/* Featured Image Link & Panel */}
                  <div className="space-y-2 text-left">
                    <label className="block text-xs font-bold text-[#BFB9AF] uppercase tracking-wider">
                      Featured Image URL
                    </label>
                    <input 
                      type="url"
                      placeholder="https://images.unsplash.com/photo-..."
                      value={editFeaturedImage}
                      onChange={(e) => setEditFeaturedImage(e.target.value)}
                      className="w-full px-3 py-2 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none bg-[#090909] text-white text-xs font-mono"
                      id="editor-image-field"
                    />
                    <div className="aspect-video w-full rounded border border-[#D4AF37]/10 overflow-hidden bg-black/60 relative flex items-center justify-center">
                      {editFeaturedImage ? (
                        <img 
                          src={editFeaturedImage} 
                          alt="Featured preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <span className="text-[#BFB9AF]/45 text-[10px] italic">No image mapped</span>
                      )}
                    </div>
                    <p className="text-[9px] text-[#BFB9AF]/60 leading-relaxed">
                      Accepts direct high-resolution image links. Supports Unsplash URLs.
                    </p>
                  </div>

                  {/* SEO Metadata parameters mapping - live feedback */}
                  <div className="space-y-4 bg-[#070707] p-4 rounded-lg border border-[#D4AF37]/10">
                    <h4 className="font-mono text-[10px] text-[#D4AF37] tracking-wider uppercase font-extrabold flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5" /> METADATA & SEO ENGINE
                    </h4>

                    {/* SEO TITLE */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-[#BFB9AF] uppercase text-[9px] tracking-wider">SEO Title meta tag</span>
                        <span className={`font-mono text-[9px] ${editSeoTitle.length > 60 ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {editSeoTitle.length} chars
                        </span>
                      </div>
                      <input 
                        type="text" 
                        placeholder="Luxury Branding strategies for Ghaziabad SMEs"
                        value={editSeoTitle}
                        onChange={(e) => setEditSeoTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-[#D4AF37]/10 focus:border-[#D4AF37] rounded focus:outline-none bg-black text-white text-xs"
                        id="editor-seotitle-field"
                      />
                      <p className="text-[9px] text-[#BFB9AF]/60 leading-relaxed">Recommended length: 50-60 characters for optimum search engines mapping.</p>
                    </div>

                    {/* META DESCRIPTION */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-[#BFB9AF] uppercase text-[9px] tracking-wider">Meta Description tag</span>
                        <span className={`font-mono text-[9px] ${editMetaDesc.length > 160 ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {editMetaDesc.length} chars
                        </span>
                      </div>
                      <textarea 
                        rows={3}
                        placeholder="Establish robust digital reach parameters and optimize localized map schemas to scale footprint..."
                        value={editMetaDesc}
                        onChange={(e) => setEditMetaDesc(e.target.value)}
                        className="w-full px-3 py-2 border border-[#D4AF37]/10 focus:border-[#D4AF37] rounded focus:outline-none bg-black text-white text-xs leading-relaxed"
                        id="editor-metadesc-field"
                      />
                      <p className="text-[9px] text-[#BFB9AF]/60 leading-relaxed">Recommended length: 140-160 characters for crisp snippet presentation.</p>
                    </div>

                  </div>

                </div>

              </form>
            </div>
          )}

        </div>
      )}

      {/* ----------------- SUBVIEW C: THE CORRESPONDING FRONT-END ARTICLE VIEW ----------------- */}
      {(activeSubView === 'read') && selectedPost && (
        <div className="max-w-3xl mx-auto space-y-10 text-left">
          
          {/* Back Action button navigation */}
          <button 
            onClick={() => {
              setActiveSubView('feed');
              setSelectedPost(null);
            }}
            className="text-xs text-[#D4AF37] hover:text-[#F5D76E] inline-flex items-center gap-1.5 font-mono uppercase tracking-wider cursor-pointer"
            id="readview-btn-back"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Newsfeed
          </button>

          {/* Core Article Layout presentation */}
          <article className="space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded tracking-widest uppercase">
                {selectedPost.category}
              </span>
              <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {selectedPost.title}
              </h1>
              <p className="font-mono text-xs text-[#BFB9AF]">
                Published on <span className="text-white">{selectedPost.createdAt}</span> by Renowned Campaign Squad
              </p>
            </div>

            {/* Featured Image */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#D4AF37]/15 bg-black/40">
              <img 
                src={selectedPost.featuredImage} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Structured Content Details */}
            <div className="prose prose-invert max-w-none text-[#BFB9AF] text-sm font-sans space-y-6 leading-relaxed whitespace-pre-wrap">
              {selectedPost.content}
            </div>

            {/* Key takeaway indicator and citation metrics */}
            <div className="bg-white/[0.02] border border-[#D4AF37]/15 rounded-xl p-6 space-y-4">
              <h4 className="font-sans font-extrabold text-white text-base">Key Campaign Takeaways:</h4>
              <p className="text-xs text-[#BFB9AF] leading-relaxed">
                Every business model demands a dedicated on-page and off-page footprint routine. Under the dynamic search indexing paradigms of 2026, low-fidelity content templates are immediately filtered by algorithmic updates. Invest directly in premium visuals and clinical technical authority.
              </p>
              <div className="flex gap-4 pt-2">
                <button
                  onClick={onRequestQuote}
                  className="bg-[#D4AF37] text-black hover:bg-[#F5D76E] font-mono font-bold text-[10px] px-5 py-2.5 rounded uppercase tracking-wider cursor-pointer transition-all"
                  id="read-cta-quote-btn"
                >
                  Consult Campaign Setup (₹5,000 - ₹50,000)
                </button>
              </div>
            </div>

          </article>

        </div>
      )}

    </div>
  );
}
