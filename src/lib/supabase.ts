import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zkeooserjpojputrvfkw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprZW9vc2VyanBvanB1dHJ2Zmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODE1MjcsImV4cCI6MjA2OTI1NzUyN30.JFK7WQiub4Llu0JX1rPkwPRl6ASAygUru0Cf3NAtbZE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Store {
  id: number
  brand: string
  region: string
  name: string
  event_start: string
  event_end: string
  created_at: string
  updated_at: string
}