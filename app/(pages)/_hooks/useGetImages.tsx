'use client';
import { useState, useEffect } from 'react';

export function useGetImages(folder: string): [any[] | null, string | null] {
  const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 60 minutes

  const [images, setImages] = useState<string[] | null>(null);

  const [error, setError] = useState<string | null>(null);

  const fetchImages = async (folder: string) => {
    try {
      const cacheKey = `images-${folder}`;

      // Check local storage for cached data
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp < CACHE_EXPIRATION_TIME) {
          // Cache is still valid
          console.log('images hit, so get cache');
          setImages(data);
          return;
        }
      }
      const response = await fetch(`/api/getCaseStudyImages?folder=${folder}`, {
        method: 'GET',
        credentials: 'include', // Ensures cookies are sent for authentication if needed
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred');
        return;
      }

      const result = await response.json();

      console.log('images miss so caching data');
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ data: result, timestamp: Date.now() })
      );
      setImages(result);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError('Failed to fetch images');
    }
  };

  useEffect(() => {
    fetchImages(folder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [images, error];
}
