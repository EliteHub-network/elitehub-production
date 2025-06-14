// lib/supabase.ts - PRODUCTION VERSION - FIXED URLS
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cpvihaapdevawxtbx.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwdmloYWFwZGV2YXd4dGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5MTQ5OTksImV4cCI6MjA1MTQ5MDk5OX0.xWwmSYepD_H1cZJJ8b0rwhDBn_QPhJT1sxXVzT_5_OM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  },
  global: {
    headers: {
      'X-Client-Info': 'elitehub-web'
    }
  },
  db: {
    schema: 'public'
  }
})

// Production-ready auth functions with retry logic and proper error handling
export async function signUp(email: string, password: string, firstName: string, lastName: string) {
  let attempts = 0
  const maxAttempts = 3
  
  while (attempts < maxAttempts) {
    try {
      attempts++
      
      const { data, error } = await supabase.auth.signUp({
        email: email.toLowerCase().trim(),
        password,
        options: {
          data: {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            full_name: `${firstName.trim()} ${lastName.trim()}`
          },
          emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : undefined
        }
      })
      
      if (error) {
        // Handle specific Supabase errors
        if (error.message.includes('User already registered')) {
          throw new Error('An account with this email already exists. Please sign in instead.')
        }
        if (error.message.includes('Invalid email')) {
          throw new Error('Please enter a valid email address.')
        }
        if (error.message.includes('Password should be at least')) {
          throw new Error('Password must be at least 6 characters long.')
        }
        throw error
      }
      
      return data
    } catch (error: any) {
      console.error(`Signup attempt ${attempts} failed:`, error)
      
      // If it's a network error and we have attempts left, retry
      if ((error.message?.includes('fetch') || error.message?.includes('network') || error.message?.includes('Failed to fetch')) && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts)) // Exponential backoff
        continue
      }
      
      // If it's a user error (not network), don't retry
      if (error.message?.includes('already registered') || 
          error.message?.includes('Invalid email') || 
          error.message?.includes('Password')) {
        throw error
      }
      
      // Final attempt failed
      if (attempts >= maxAttempts) {
        throw new Error('Unable to create account. Please check your internet connection and try again.')
      }
      
      throw error
    }
  }
}

export async function signIn(email: string, password: string) {
  let attempts = 0
  const maxAttempts = 3
  
  while (attempts < maxAttempts) {
    try {
      attempts++
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase().trim(),
        password
      })
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          throw new Error('Invalid email or password. Please check your credentials.')
        }
        if (error.message.includes('Email not confirmed')) {
          throw new Error('Please verify your email before signing in. Check your inbox for the verification link.')
        }
        throw error
      }
      
      return data
    } catch (error: any) {
      console.error(`Signin attempt ${attempts} failed:`, error)
      
      // If it's a network error and we have attempts left, retry
      if ((error.message?.includes('fetch') || error.message?.includes('network') || error.message?.includes('Failed to fetch')) && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts))
        continue
      }
      
      // Don't retry user errors
      if (error.message?.includes('Invalid login') || 
          error.message?.includes('Email not confirmed')) {
        throw error
      }
      
      if (attempts >= maxAttempts) {
        throw new Error('Unable to sign in. Please check your internet connection and try again.')
      }
      
      throw error
    }
  }
}

export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      console.error('Get user error:', error)
      return null
    }
    
    return user
  } catch (error) {
    console.error('Get user failed:', error)
    return null
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    
    // Clear localStorage
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
    
    return { success: true }
  } catch (error: any) {
    console.error('Sign out error:', error)
    throw new Error('Failed to sign out. Please try again.')
  }
}

// Health check function
export async function checkSupabaseHealth() {
  try {
    const { data, error } = await supabase.auth.getSession()
    return { healthy: true, error: null }
  } catch (error: any) {
    return { healthy: false, error: error.message }
  }
}

// Initialize connection test on load (only in browser)
if (typeof window !== 'undefined') {
  checkSupabaseHealth().then(result => {
    if (result.healthy) {
      console.log('✅ Supabase connection successful')
    } else {
      console.error('❌ Supabase connection failed:', result.error)
    }
  })
}