import { Repos } from '../types'

const Forked = ({ repos }: { repos: Repos[] }) => {
  const filteredRepos = repos.filter((repo) => repo.fork === true)

  if (filteredRepos.length === 0) {
    return (
      <div className='text-center pt-9 text-3xl text-gray-900 dark:text-slate-50'>
        <h3 className='text-2xl font-bold'>No Forked</h3>
      </div>
    )
  }

  return (
    <section className='h-full py-2 w-full lg:grid-cols-2 grid grid-cols-1 gap-4'>
      {filteredRepos.map((repo: Repos) => (
        <article
          className='w-full flex flex-col justify-between relative bg-slate-200 dark:bg-[#172035] rounded-xl'
          key={repo.id}
        >
          <div className='p-4'>
            <div className='flex justify-between pb-2'>
              <h1 className='text-2xl font-bold'>{repo.name}</h1>
              <span className='bg-neutral-300 dark:bg-slate-700 rounded-full text-sm flex justify-center items-center py-2 px-4 max-h-8'>
                {repo.visibility}
              </span>
            </div>
            <p className='dark:text-slate-400 text-gray-600'>
              {repo.description}
            </p>
          </div>
          <div className='flex gap-5 bg-neutral-300 dark:bg-gray-800 p-4 rounded-bl-xl rounded-br-xl'>
            {renderInfo('code', repo.language)}
            {renderInfo('account_tree', repo.forks_count)}
            {renderInfo('star', repo.stargazers_count)}
            {renderInfo('visibility', repo.watchers_count)}
          </div>
        </article>
      ))}
    </section>
  )
}

const renderInfo = (icon: string, value: string | number) => (
  <div className='flex items-center justify-center gap-1 dark:text-slate-300'>
    <span className='material-symbols-outlined h-full flex justify-center items-center'>
      {icon}
    </span>
    <p className='h-full flex justify-center items-center'>{value}</p>
  </div>
)

export default Forked
