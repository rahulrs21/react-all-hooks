import React from 'react'
import HookUseState from './components/HookUseState'
import HookUseReducer from './components/HookUseReducer'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import UseLayout from './components/UseLayout'
import ImperativeHandle from './components/ImperativeHandle'
import UseContextHook from './components/UseContextHook'
import UseMemo from './components/UseMemo'
import FetchDataAPI from './components/FetchDataAPI'
import UseCallback from './components/UseCallback'
import Practice from './components/Practice'
import ReactTask1 from './components/ReactTask1'
import ReactTask2 from './components/ReactTask2'

const App = () => {

  return (
    <div className=''>
      <HookUseState /><hr />
      <HookUseReducer /> <hr />
      <UseEffect /> <hr />
      <UseRef /> <hr />
      <UseLayout /> <hr />
      <ImperativeHandle /> <hr />
      <UseContextHook /> <hr />
      <UseMemo />  <hr />
      <UseCallback />  <hr />
      
      <Practice />

      {/* <ReactTask1 /> */}
      <ReactTask2/>
      
      

      <FetchDataAPI />
    </div>
  )
}

export default App





