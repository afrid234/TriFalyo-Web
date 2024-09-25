import { useState } from 'react'
import AppRoutes from './Routes/Routes'



const App = () => {
  const [count, setCount] = useState(0)

  return (
      <div>

          <AppRoutes/>

      </div>
  )
}


export default App
