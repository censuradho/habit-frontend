import { habitServer } from "@/services/server/habit";
import { CreateHabitPayload } from "@/services/server/habit/types";
import { 
  createContext, 
  useContext, 
  PropsWithChildren, 
  useState, 
  useEffect
} from "react";

import type { 
  HabitContextData, 
  SummaryData 
} from "./types";

const HabitContext = createContext({} as HabitContextData)

export function HabitProvider ({ children }: PropsWithChildren) {
  const [summary, setSummary] = useState<SummaryData[]>()
  const [isLoading, setIsLoading] = useState(false)


  const handleGetSummary = async () => {
    const { data } = await habitServer.findSummary()
    setSummary(data)
  }
  
  useEffect(() => {
    handleGetSummary()
  }, [])

  return (
    <HabitContext.Provider 
      value={{
        summary,
        isLoading,
        getSummary: handleGetSummary
      }}
    >
      {children}
    </HabitContext.Provider>
  )
}

export const useHabit = () => useContext(HabitContext)