import { $api } from '@/api'

enum RealtyObjectType {
  FLAT = 'FLAT',
  APARTMENT = 'APARTMENT',
}

export interface FilterRangeSpec {
  min: number
  max: number
}

export interface FilterSelectSpec {
  id: number
  name: string
}

export interface RealtyObjectFitlerSpecsDto {
  type: FilterSelectSpec[]
  rooms: FilterSelectSpec[]
  price: FilterRangeSpec
  area: FilterRangeSpec
  floor: FilterRangeSpec
  furnish: FilterSelectSpec[]
  property: FilterSelectSpec[]
  benefits: FilterSelectSpec[]
}

export interface RealtyObjectDto {
  id: number
  number: string
  type: RealtyObjectType
  rooms: number
  floor: number
  total_floors: number
  area: number
  plan: string
  originalPrice: number
  price: number
  property: { id: number; name: string }
  furnish?: FilterSelectSpec[]
  benefits?: FilterSelectSpec[]
}

interface MetaResponse {
  totalCount: number
  next: number | null
  prev: number | null
}

export interface GetRealtyObjectsResponse {
  data: RealtyObjectDto[]
  meta: MetaResponse
}

export const getRealtyObjects = async (queryParams = '') => {
  //   await new Promise((r) => setTimeout(r, 5000))
  return (await $api.get<GetRealtyObjectsResponse>(`/filter?${queryParams}`))
    .data
}

export const getRealtyObjectsFilterSpecs = async () => {
  return (await $api.get<RealtyObjectFitlerSpecsDto>('/filter/specs')).data
}
