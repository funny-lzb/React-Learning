import './css/user.css'
import user from './data/user.json'
import UserCard from './component/UserCard'
import UseState from './component/UseState'
import ArrayState from './component/ArrayState'
import CounterWithNameProject from './component/CounterWithNameProject'

function App() {
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
      <CounterWithNameProject />
    </>
  )
}

export default App
