import qs from 'querystring'

import { api } from "../api";
import { FindHabitByDateResponse } from './types';

export async function findByDate (date: string | Date) {
  const query = qs.stringify({
    date: new Date(date).toISOString()
  })

  return api.get<FindHabitByDateResponse[]>(`/habits?${query}`)
}

export const habitServer = {
  findByDate
}