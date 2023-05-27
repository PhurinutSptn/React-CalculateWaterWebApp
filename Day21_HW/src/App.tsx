import WaterPerDay from './components/WaterPerDay'
import DropDownTheme from './components/DropDownTheme'
import { useState } from 'react'

function App() {
  const [DarkMode, setDarkMode] = useState<string>('light')

  return (
    <>
      <div className='app' data-theme={ DarkMode }>
        <WaterPerDay/>
        <DropDownTheme setDarkMode={ setDarkMode }/>
      </div>
    </>
  )
}

export default App
