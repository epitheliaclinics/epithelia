'use client';

import { useEffect, useState } from 'react';

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_keywords?: string;
}

export function useUTMParams(): UTMParams {
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_keywords: '',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const urlParams = new URLSearchParams(window.location.search);

      const params: UTMParams = {
        utm_source:
          urlParams.get('utm_source') || getCookie('utm_source') || '',
        utm_medium:
          urlParams.get('utm_medium') || getCookie('utm_medium') || '',
        utm_campaign:
          urlParams.get('utm_campaign') || getCookie('utm_campaign') || '',
        utm_keywords:
          urlParams.get('utm_term') ||
          urlParams.get('utm_keywords') ||
          getCookie('utm_keywords') ||
          '',
      };

      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');
      const utmTerm = urlParams.get('utm_term');

      if (utmSource) setCookie('utm_source', utmSource, 30);
      if (utmMedium) setCookie('utm_medium', utmMedium, 30);
      if (utmCampaign) setCookie('utm_campaign', utmCampaign, 30);
      if (utmTerm) setCookie('utm_keywords', utmTerm, 30);

      setUtmParams(params);
    } catch (error) {
      console.warn('UTM params initialization error:', error);
    }
  }, []);

  return utmParams;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  try {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  } catch (error) {
    console.warn('Cookie read error:', error);
  }
  return null;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;

  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  } catch (error) {
    console.warn('Cookie write error:', error);
  }
}
