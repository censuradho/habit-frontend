import { 
  createContext, 
  useContext, 
  PropsWithChildren, 
  useState 
} from "react";

import type { 
  HabitContextData, 
  HabitData 
} from "./types";

const HabitContext = createContext({} as HabitContextData)

export function HabitProvider ({ children }: PropsWithChildren) {
  const [data, setData] = useState<HabitData>()
  
  return (
    <HabitContext.Provider 
      value={{
        data
      }}
    >
      {children}
    </HabitContext.Provider>
  )
}

export const useHabit = () => useContext(HabitContext)