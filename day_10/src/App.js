import React from 'react'
import ChildComponent from './ChildComponent'
const App = () => {
  const user = {
    name:'divyanshi',
    email:'divyanshibhardwaj999@gmail.com',
    section:'cse18'
  }
return (
  <div>
    <ChildComponent user={user}/>
        </div>
      )
    }
export default App