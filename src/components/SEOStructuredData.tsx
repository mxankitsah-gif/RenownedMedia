/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

export default function SEOStructuredData() {
  useEffect(() => {
    // Schema definitions
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://renownedmedia.vercel.app/#organization",
          "name": "Renowned Media",
          "url": "https://renownedmedia.vercel.app",
          "logo": {
            "@type": "ImageObject",
            "@id": "https://renownedmedia.vercel.app/#logo",
            "url": "https://renownedmedia.vercel.app/logo.png",
            "caption": "Renowned Media Logo"
          },
          "email": "renownedmedia@outlook.in",
          "telephone": "+91-882-899-8296",
          "description": "From digital PR to content production, Renowned Media helps brands grow visibility, authority and audience engagement across modern platforms.",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-882-899-8296",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-983-384-9337",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi"]
            }
          ],
          "founder": {
            "@type": "Person",
            "@id": "https://renownedmedia.vercel.app/#ankit-sah"
          }
        },
        {
          "@type": "Person",
          "@id": "https://renownedmedia.vercel.app/#ankit-sah",
          "name": "Ankit Sah",
          "jobTitle": "Founder & Owner",
          "worksFor": {
            "@type": "Organization",
            "@id": "https://renownedmedia.vercel.app/#organization"
          },
          "description": "Founder and lead coordinator at Renowned Media, driving elite branding, digital PR, and organic search authority for media personalities, political figures, and businesses in India."
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://renownedmedia.vercel.app/#local-business",
          "name": "Renowned Media - Ghaziabad Office",
          "image": "https://renownedmedia.vercel.app/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "887, Nitikhand-1, Indirapuram",
            "addressLocality": "Ghaziabad",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201014",
            "addressCountry": "IN"
          },
          "telephone": "+91-882-899-8296",
          "url": "https://renownedmedia.vercel.app",
          "priceRange": "$$",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.636611",
            "longitude": "77.373389"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://renownedmedia.vercel.app/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you host on-site production shoots?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. We coordinate on-site and in-studio multi-camera shoots. Fred Buster, our Director of Operations, handles complete logistics including set layout, lighting, acoustic rigs, and raw asset collection."
              }
            },
            {
              "@type": "Question",
              "name": "What is the standard onboarding timeline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically, we can formalize a strategy blueprint, agree on asset cadences, and launch search engineering optimization workflows within 5-7 business days of booking confirmation."
              }
            },
            {
              "@type": "Question",
              "name": "Are your SEO strategies monthly or lump sum?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Continuous organic search authority requires monthly execution (on-page updates, crawl logging, pillar construction). Therefore, we offer transparent standard or velocity-scale monthly retainers."
              }
            }
          ]
        },
        {
          "@type": "ItemList",
          "@id": "https://renownedmedia.vercel.app/#services-list",
          "name": "Renowned Media Services",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Service",
                "name": "Social Media Management",
                "description": "Build a powerful digital presence through strategic social media management. From content planning and publishing to audience engagement and growth campaigns, we manage your brand across all major platforms.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://renownedmedia.vercel.app/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Service",
                "name": "Content Production & Video Editing",
                "description": "Professional content creation for YouTube, podcasts, brands and influencers. We transform ideas into engaging visual stories that capture attention and drive results.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://renownedmedia.vercel.app/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Service",
                "name": "Performance Marketing",
                "description": "Data-driven advertising campaigns designed to generate leads, sales and measurable business growth.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://renownedmedia.vercel.app/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Service",
                "name": "Political Digital Campaigns",
                "description": "Comprehensive digital campaign management for political leaders, candidates and organizations. We combine content, outreach and technology to maximize voter engagement and digital influence.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://renownedmedia.vercel.app/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "Service",
                "name": "SEO & Website Management",
                "description": "Improve online visibility and search rankings with strategic SEO and professional website management.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://renownedmedia.vercel.app/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "Service",
                "name": "Public Relations & Media Management",
                "description": "Strengthen your brand reputation through media relations, press coverage and strategic communication.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://renownedmedia.vercel.app/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 7,
              "item": {
                "@type": "Service",
                "name": "Branding & Creative Design",
                "description": "Create memorable brand experiences through impactful design and visual communication.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://renownedmedia.vercel.app/#organization"
                }
              }
            }
          ]
        }
      ]
    };

    // Inject or update JSON-LD tag in head dynamically to support crawler parsing
    let scriptId = "google-structured-data-jsonld";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schema, null, 2);

    return () => {
      // Optional: Cleanup script tag on unmount if needed
      // but keeping it mounted is standard practice for SPAs.
    };
  }, []);

  return null; // Invisible component
}
