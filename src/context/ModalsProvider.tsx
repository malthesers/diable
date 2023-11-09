'use client'

import { ReactNode, createContext, useContext } from 'react'
import { ModalsContext } from '../interfaces/ModalsContext'
import useToggle from '../hooks/useToggle'

const ModalsContext = createContext<ModalsContext>({
  toggleShowInstructions: (value?: boolean) => {},
  toggleShowQualities: (value?: boolean) => {},
  toggleShowRecords: (value?: boolean) => {},
  toggleShowVictory: (value?: boolean) => {},
  toggleShowDefeat: (value?: boolean) => {},
  showInstructions: false,
  showQualities: false,
  showRecords: false,
  showVictory: false,
  showDefeat: false,
})

export function useModals() {
  return useContext(ModalsContext)
}

export default function ModalsProvider({ children }: { children: ReactNode }) {
  const [showInstructions, toggleShowInstructions] = useToggle(false)
  const [showQualities, toggleShowQualities] = useToggle(false)
  const [showRecords, toggleShowRecords] = useToggle(false)
  const [showVictory, toggleShowVictory] = useToggle(false)
  const [showDefeat, toggleShowDefeat] = useToggle(false)


  return (
    <ModalsContext.Provider value={{ showInstructions, toggleShowInstructions, showQualities, toggleShowQualities, showRecords, toggleShowRecords, showVictory, toggleShowVictory, showDefeat, toggleShowDefeat }}>
      {children}
    </ModalsContext.Provider>
  )
}