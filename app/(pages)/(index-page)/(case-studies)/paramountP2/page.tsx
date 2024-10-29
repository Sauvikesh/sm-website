'use client';
import { ErrorMessageContent } from '@/app/(api)/api/getCaseStudyData/route';
import { useEffect, useState } from 'react';

export default function Paramount() {
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
    fetchData(4, 'p_project_2');
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : bodyData && h2Data && h3Data && h4Data ? (
        <div>
          <p>Body: {bodyData[21]}</p>
          <br></br>

          <p>H2: {h2Data.join(', ')}</p>
          <br></br>

          <p>H3: {h3Data.join(', ')}</p>
          <br></br>

          <p>H4: {h4Data.join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
