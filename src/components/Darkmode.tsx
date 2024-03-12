import { useState, useEffect } from 'react'

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDarkMode ?  'dark' : 'light'
  })

  useEffect(() => {
    if (isDarkMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleMode = () => {
    setIsDarkMode(isDarkMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='darkmode-toggle h-full'>
      <button onClick={toggleMode}>
        <span className='material-symbols-outlined p-[9px] rounded-full bg-neutral-300 dark:bg-slate-500'>
          {isDarkMode === 'dark' ? 'dark_mode' : 'light_mode'}
        </span>
      </button>
    </div>
  )
}

export default Darkmode
