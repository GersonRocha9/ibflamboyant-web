import { BabiesPresentationProps, PrayerRequestProps } from '../types'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_TOKEN,
)

const currentDate = new Date()
const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)

export const fetchPrayerRequests = async () => {
  const { data } = await supabase
    .from('prayers')
    .select('*')
    .gte('created_at', sevenDaysAgo.toISOString())
    .lte('created_at', currentDate.toISOString())
    .order('created_at', { ascending: false })

  return data as PrayerRequestProps[]
}

export const fetchBabiesPresentation = async () => {
  const { data } = await supabase
    .from('baby')
    .select('*')
    .gte('created_at', sevenDaysAgo.toISOString())
    .lte('created_at', currentDate.toISOString())
    .order('created_at', { ascending: false })

  return data as BabiesPresentationProps[]
}
