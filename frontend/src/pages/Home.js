import React from 'react';
import { useEffect } from 'react';
import { useWorkoutsContext } from '../Components/hooks/useWorkoutsContext';
import WorkoutDetails from '../Components/WorkoutDetails';
import WorkoutForm from '../Components/WorkoutForm';

const Home = () => {

  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(()=>{
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
