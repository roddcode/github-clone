import { Repos } from '../types'

const Repositories = ({ repos }: { repos: Repos[] }) => {
  if (repos.length === 0) {
    return (
      <div className='text-center pt-9 text-3xl text-gray-900 dark:text-slate-50'>
        <h3 className='text-2xl font-bold'>No Repositories</h3>
      </div>
    )
  }

  return (
    <section className='h-full py-2 w-full lg:grid-cols-2 grid grid-cols-1 gap-4'>
      {repos.map((repo: Repos) => (
        <article
          key={repo.id}
          className='w-full flex flex-col justify-between relative bg-gray-200 dark:bg-[#172035] rounded-xl '
        >
          <div className='p-4'>
            <div className='flex justify-between pb-2'>
              <h1 className='text-2xl font-bold'>{repo.name}</h1>
              <span className='bg-neutral-300 dark:bg-slate-700 rounded-full text-sm flex max-h-8 justify-center items-center py-2 px-4'>
                {repo.visibility}
              </span>
            </div>
            <p className='text-gray-600 dark:text-slate-400'>
              {repo.description}
            </p>
          </div>
          <div className='flex gap-5 bg-neutral-300 dark:bg-gray-800 p-4 rounded-bl-xl rounded-br-xl dark:text-slate-300'>
            <div className='flex items-center justify-center gap-1'>
              <span className='material-symbols-outlined h-full flex justify-center items-center'>
                code
              </span>
              <p className='h-full flex justify-center items-center'>
                {repo.language}
              </p>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <span className='material-symbols-outlined h-full flex justify-center items-center'>
                account_tree
              </span>
              <p className='h-full flex justify-center items-center'>
                {repo.forks_count}
              </p>
            </div>

            <div className='flex items-center justify-center gap-1'>
              <span className='material-symbols-outlined h-full flex justify-center items-center'>
                star
              </span>
              <p className='h-full flex justify-center items-center'>
                {repo.stargazers_count}
              </p>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <span className='material-symbols-outlined h-full flex justify-center items-center'>
                visibility
              </span>
              <p className='h-full flex justify-center items-center'>
                {repo.watchers_count}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Repositories
