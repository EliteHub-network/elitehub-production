"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallback() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the code from URL
        const code = new URLSearchParams(window.location.search).get('code');
        
        if (code) {
          // Exchange code for session
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          
          if (error) {
            console.error('Error during auth callback:', error);
            router.push('/auth?error=' + encodeURIComponent(error.message));
            return;
          }
        }

        // Check if we have a session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
          // User is logged in, redirect to dashboard
          router.push('/dashboard');
        } else {
          // No session, redirect to auth with success message
          router.push('/auth?message=Email confirmed! Please sign in.');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        router.push('/auth');
      }
    };

    handleCallback();
  }, [router, supabase]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-300">Confirming your email...</p>
      </div>
    </div>
  );
}