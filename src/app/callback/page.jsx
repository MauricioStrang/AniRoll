"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleTokenExchange = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
    
      if (!code) {
        console.error('Authorization code not found');
        return;
      }
    
      try {
        const response = await fetch('/api/mal-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code,
            code_verifier: localStorage.getItem('code_verifier'),
          }),
        });
    
        const data = await response.json();
    
        console.log('Response data:', data);  // Add this line to log the data
    
        if (!response.ok) {
          throw new Error(data.error || 'Failed to exchange code for token');
        }
    
        // Store the access token and redirect
        localStorage.setItem('access_token', data.access_token);
        router.push('/');
      } catch (error) {
        console.error('Error during token exchange:', error);
      }
    };

    if (window.location.search) {
      handleTokenExchange();
    }
  }, [router]);

  return <div>Handling Callback...</div>;
};

export default Callback;