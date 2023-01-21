import { format as dateFormat } from "date-fns";
import ptbr from 'date-fns/locale/pt-BR'

export function format (date: string | Date, pattern: string) {
  return dateFormat(new Date(date), pattern, {
    locale: ptbr
  })
}