//Page that handles the callback after the authorisation of the user from MAL
//This page should only be able to be seen after the user authorized his MAL account and just for a brief moment
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Callback = () => {
  const router = useRouter();

  useEffect(() => {

    //Handle the metadata on client component
    document.title = "Loading request...";
    document.querySelector('meta[name="description"]').setAttribute("content", "Callback page");   

    const handleTokenExchange = async () => {
      //getting the authorisation code from the url query
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
    
      if (!code) {
        console.error('Authorization code not found');
        return;
      }
    
      try {
        //then we use this try-catch to make our api request to exchange auth token for acess token
        const response = await fetch('/api/mal-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // we pass the code that we just saved
          body: JSON.stringify({
            code,
          }),
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.error || 'Failed to exchange code for token');
        }
    
        // Store the access token to the localStorage and redirect to homepage
        localStorage.setItem('access_token', data.access_token);
        router.push('/');
      } catch (error) {
        console.error('Error during token exchange:', error);
      }
    };
    handleTokenExchange()
  }, [router]);

  //message to show while handling callback, need to makes this prettier
  return <div>Handling Callback...</div>;
};

export default Callback;