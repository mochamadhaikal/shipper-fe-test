import {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
} from 'react'

interface State {
  keyword: string
}

type Action =
  | { type: 'SET_KEYWORD'; payload: string }


const initialState: State = {
  keyword: ''
}

const DriverStore = createContext<{
  driverState: State
  driverDispatch: Dispatch<Action>
}>({
  driverState: initialState,
  driverDispatch: () => null
})


interface DriverProviderProps {
  children: ReactNode
}

function DriverProvider({ children }: DriverProviderProps){
  const [driverState, driverDispatch] = useReducer(
    (_: State, action: Action) => {
      switch (action.type) {
        case 'SET_KEYWORD':
          return {
            keyword: action.payload
          }
        default:
          throw new Error()
      }
    },
    initialState
  )

  return (
    <DriverStore.Provider value={{ driverState, driverDispatch }}>
      {children}
    </DriverStore.Provider>
  )
}

export { DriverStore, DriverProvider }
