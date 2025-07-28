import { supabase, Store } from './supabase'

export async function getStoresByBrand(brand: string): Promise<Store[]> {
  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .eq('brand', brand)
    .order('region')
    .order('name')

  if (error) {
    console.error('Error fetching stores:', error)
    return []
  }

  return data || []
}

export async function getAllStores(): Promise<Store[]> {
  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .order('brand')
    .order('region')
    .order('name')

  if (error) {
    console.error('Error fetching stores:', error)
    return []
  }

  return data || []
}