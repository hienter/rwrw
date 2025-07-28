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

export async function getAllActiveStores(sortBy: 'click_count' | 'event_end' = 'click_count', regionFilter?: string): Promise<Store[]> {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD 형식
  
  let query = supabase
    .from('stores')
    .select('*')
    .lte('event_start', today) // 행사 시작일이 오늘 이전이거나 오늘
    .gte('event_end', today)   // 행사 종료일이 오늘 이후

  // 지역 필터 적용
  if (regionFilter && regionFilter !== 'all') {
    query = query.eq('region', regionFilter)
  }

  // 정렬 적용
  if (sortBy === 'click_count') {
    query = query.order('click_count', { ascending: false })
  } else if (sortBy === 'event_end') {
    query = query.order('event_end', { ascending: false }) // 행사 종료일이 늦은 순
  }
  
  query = query.order('brand').order('region').order('name')

  const { data, error } = await query

  if (error) {
    console.error('Error fetching all active stores:', error)
    return []
  }

  return data || []
}

export async function getActiveStoresByBrand(brand: string, sortBy: 'click_count' | 'event_end' = 'click_count', regionFilter?: string): Promise<Store[]> {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD 형식
  
  let query = supabase
    .from('stores')
    .select('*')
    .eq('brand', brand)
    .lte('event_start', today) // 행사 시작일이 오늘 이전이거나 오늘
    .gte('event_end', today)   // 행사 종료일이 오늘 이후

  // 지역 필터 적용
  if (regionFilter && regionFilter !== 'all') {
    query = query.eq('region', regionFilter)
  }

  // 정렬 적용
  if (sortBy === 'click_count') {
    query = query.order('click_count', { ascending: false })
  } else if (sortBy === 'event_end') {
    query = query.order('event_end', { ascending: false }) // 행사 종료일이 늦은 순
  }
  
  query = query.order('region').order('name')

  const { data, error } = await query

  if (error) {
    console.error('Error fetching active stores:', error)
    return []
  }

  return data || []
}

export async function getUniqueRegions(): Promise<string[]> {
  const { data, error } = await supabase
    .from('stores')
    .select('region')
    .order('region')

  if (error) {
    console.error('Error fetching regions:', error)
    return []
  }

  // 중복 제거
  const uniqueRegions = [...new Set(data?.map(item => item.region) || [])]
  return uniqueRegions
}