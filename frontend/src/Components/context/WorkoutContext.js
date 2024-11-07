import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return { workouts: action.payload }
            case 'CREATE_WORKOUT':
                return {
                    workouts: [ action.payload, ...state.workouts ],
                }
                case 'DELETE_WORKOUT':
                  return {
                    workouts: state.workouts.filter((w) => w.id !== action.payload.id),
                  }
                default: return state
    }
} 

export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    // dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}

// export default WorkoutContext
