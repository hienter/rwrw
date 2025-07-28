import { supabase, Store } from './supabase'

export async function getStoresByBrand(brand: string): Promise<Store[]> {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD 형식
  
  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .eq('brand', brand)
    .gte('event_end', today) // 행사 종료일이 오늘 이후인 것만
    .order('region')
    .order('name')

  if (error) {
    console.error('Error fetching stores:', error)
    return []
  }

  return data || []
}

export async function getAllStores(): Promise<Store[]> {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD 형식
  
  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .gte('event_end', today) // 행사 종료일이 오늘 이후인 것만
    .order('brand')
    .order('region')
    .order('name')

  if (error) {
    console.error('Error fetching stores:', error)
    return []
  }

  return data || []
}

export async function getActiveStoresByBrand(brand: string): Promise<Store[]> {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD 형식
  
  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .eq('brand', brand)
    .lte('event_start', today) // 행사 시작일이 오늘 이전이거나 오늘
    .gte('event_end', today)   // 행사 종료일이 오늘 이후
    .order('region')
    .order('name')

  if (error) {
    console.error('Error fetching active stores:', error)
    return []
  }

  return data || []
}