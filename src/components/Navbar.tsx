/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Darkmode from './Darkmode'

const Navbar = ({ setSearch }: { setSearch: string | any }) => {
  const [searchInputOpen, setSearchInputOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (searchValue === '') return
    setSearch(searchValue)
  }
  return (
    <div
      id='navbar'
      className='flex justify-between items-center p-4 sticky top-0 w-full right-0 bottom-0  left-0 max-w-screen-xl mx-auto h-[70px] z-50 dark:bg-gray-900 bg-slate-200'
    >
      <a
        href='#'
        className={`text-3xl font-bold text-cyan-500 md:block ${
          searchInputOpen && 'hidden'
        }`}
      >
        <span className='text-slate-50'>Git</span>Explorer
      </a>

      <div
        className={`flex gap-4 items-center h-full md:w-auto ${
          searchInputOpen && 'w-full'
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className='relative hidden h-full md:block'
        >
          <span className='material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-3'>
            search
          </span>
          <button className='bg-cyan-500 text-slate-50 px-4 py-2 h-full rounded-full absolute top-1/2 right-0 -translate-y-1/2'>
            Search
          </button>
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className='bg-gray-800 py-3 pl-12 pr-24 rounded-full'
          />
        </form>

        <div className='relative flex items-center gap-4 md:hidden w-full'>
          {searchInputOpen ? (
            <form onSubmit={handleSubmit} className='flex w-full gap-4'>
              <span
                onClick={() => setSearchInputOpen(false)}
                className='material-symbols-outlined bg-slate-500 p-[9px] rounded-full'
              >
                arrow_back
              </span>
              <input
                type='text'
                placeholder='Search'
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                className='bg-gray-800 p-3 rounded-full w-full'
              />
            </form>
          ) : (
            <span
              className='material-symbols-outlined bg-slate-500 p-[9px] rounded-full'
              onClick={() => setSearchInputOpen(true)}
            >
              search
            </span>
          )}
        </div>
        <Darkmode />
      </div>
    </div>
  )
}

export default Navbar
