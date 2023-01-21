import qs from 'querystring'

import { api } from "../api";

import type { 
  CreateHabitPayload,
  FindHabitByDateResponse, 
  Habit, 
  Summary 
} from './types';

export async function findByDate (date: string | Date) {
  const query = qs.stringify({
    date: new Date(date).toISOString()
  })

  return api.get<FindHabitByDateResponse>(`/habits?${query}`)
}

async function findSummary () {
  return api.get<Summary[]>('/summary')
}

function toggle (id: string) {
  return api.patch(`/habits/${id}/toggle  `)
}

function create (payload: CreateHabitPayload) {
  return api.post('/habits', payload)
}

export const habitServer = {
  findByDate,
  findSummary,
  toggle,
  create
}