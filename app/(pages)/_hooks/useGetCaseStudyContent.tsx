import { ErrorMessageContent } from '@/app/(api)/api/getCaseStudyData/route';
import { useState, useEffect } from 'react';

export type useGetCaseStudyContentProps = {
  contentID: number;
  tableName: string;
};

export function useGetCaseStudyContent({
  contentID,
  tableName,
}: useGetCaseStudyContentProps): [
  string[] | null,
  string[] | null,
  string[] | null,
  string[] | null,
  string | null,
] {
  const [bodyData, setBodyData] = useState<string[] | null>(null);
  const [h2Data, setH2Data] = useState<string[] | null>(null);
  const [h3Data, setH3Data] = useState<string[] | null>(null);
  const [h4Data, setH4Data] = useState<string[] | null>(null);

  const [error, setError] = useState<string | null>(null);

  // Function to fetch data from the API
  const fetchData = async (id: number, table: string) => {
    try {
      const response = await fetch(
        `/api/getCaseStudyData?id=${id}&table=${table}`,
        {
          method: 'GET',
          credentials: 'include', // Ensures cookies are sent for authentication if needed
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred');
        return;
      }

      const result: ErrorMessageContent = await response.json();
      setBodyData(result.body);
      setH2Data(result.h2);
      setH3Data(result.h3);
      setH4Data(result.h4);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchData(contentID, tableName);
  }, [contentID, tableName]);

  return [bodyData, h2Data, h3Data, h4Data, error];
}
