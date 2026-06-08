/**
 * Copyright 2026 Renowned Media
 * SPDX-License-Identifier: Apache-2.0
 */

// Global GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-K7DQYZ4PB6';

// Extend the window interface for TypeScript verification
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Initializes and loads GA4 script asynchronously
 */
export function initGA() {
  if (typeof window === 'undefined') return;

  // Check if already initialized
  if (window.gtag) return;

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  // Configure initial timestamp and base parameters
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // Disable default pageview tracking as we manage it dynamically (SPA)
    anonymize_ip: true,
  });

  // Inject script asynchronously
  const scriptId = 'google-analytics-gtag';
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    
    // Safely append to document head or body
    const docHead = document.head || document.getElementsByTagName('head')[0];
    if (docHead) {
      docHead.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
  }
}

/**
 * Tracks custom page view (for SPA view-changes)
 * @param tabName Name of active view tab
 */
export function trackPageView(tabName: string) {
  if (typeof window === 'undefined' || !window.gtag) return;

  const pagePath = tabName === 'home' ? '/' : `/${tabName}`;
  const pageTitle = `${tabName.charAt(0).toUpperCase() + tabName.slice(1)} | Renowned Media`;

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Universal custom event tracker
 */
export function trackEvent(name: string, params?: Record<string, any>) {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn(`[GA4 Sandbox] Event tracked before load: ${name}`, params);
    return;
  }
  window.gtag('event', name, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Specific tracker for "Get a Quote" / "Request Quote" button clicks
 * @param origin Where the button was clicked
 */
export function trackQuoteClick(origin: string) {
  trackEvent('quote_button_click', {
    event_category: 'engagement',
    event_label: origin,
  });
}

/**
 * Specific tracker for Form Submission actions
 * @param method Embedded form interaction or direct external form launch
 */
export function trackFormSubmission(method: string) {
  trackEvent('contact_form_submission', {
    event_category: 'inquiry',
    event_label: method,
  });
}
