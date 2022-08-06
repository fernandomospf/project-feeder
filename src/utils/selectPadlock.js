import { GiPadlock, GiPadlockOpen } from 'react-icons/gi';

export const  selectPadlock = (state, stateSet ,nameClass) => {
  return state ? <GiPadlock className={nameClass} onClick={ () => stateSet(!state)}/> 
  : <GiPadlockOpen className={nameClass}onClick={ () => stateSet(!state)}/> 
}