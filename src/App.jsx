import './css/user.css'
import user from './data/user.json'
import UserCard from './component/UserCard'
import UseState from './component/UseState'
import ArrayState from './component/ArrayState'
import CounterWithNameProject from './component/CounterWithNameProject'
import { Child } from './component/component lifecycle/Child'
import FetchDataToAPI from './component/component lifecycle/FetchDataToAPI'
import RenderingLIst from './AdvancedComponent/RenderingLIst'
import UserListProject from './AdvancedComponent/UserListProject'
import SimpleTodoList from './AdvancedComponent/SimpleTodoList'
import Ref from './component/BasicHooks/Ref'
import FetchProject from './component/BasicHooks/useFetchProject'
import { useState } from 'react'

function App() {
  // const [show, setShow] = useState(true)

  // const childComponent = show ? <Child /> : null

  return (
    <>
      {/* <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <UseState /> */}
      {/* <ArrayState /> */}
      {/* <CounterWithNameProject /> */}
      {/* <div>
        <button onClick={() => setShow(currentShow => !currentShow)}>
          Show/Hide
        </button>
        {childComponent}
      </div> */}
      {/* <FetchDataToAPI /> */}
      {/* <RenderingLIst /> */}
      {/* <UserListProject /> */}
      {/* <SimpleTodoList /> */}
      {/* <Ref /> */}
      <FetchProject />
    </>
  )
}

export default App
