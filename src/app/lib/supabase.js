import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_supabaseUrl
const supabaseAnon = process.env.NEXT_PUBLIC_supabaseAnon

export const supabase = createClient(
    supabaseUrl,
    supabaseAnon
)