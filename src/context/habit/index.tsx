import { 
  createContext, 
  useContext, 
  PropsWithChildren, 
  useState 
} from "react";

import type { 
  HabitContextData, 
  SummaryData 
} from "./types";

const HabitContext = createContext({} as HabitContextData)

export function HabitProvider ({ children }: PropsWithChildren) {
  const [summary, setSummary] = useState<SummaryData>()
  
  return (
    <HabitContext.Provider 
      value={{
        summary
      }}
    >
      {children}
    </HabitContext.Provider>
  )
}

export const useHabit = () => useContext(HabitContext)