import { Repos } from "../types"

const Forked = ({repos} : {repos: Repos[]}) => {
  return (
    <section className='h-full py-2 w-full lg:grid-cols-2 grid grid-cols-1 gap-4'>
    {
      repos.filter((repo : Repos) => repo.fork === true).map((repo : Repos) => {
        return (
          <article className="w-full flex flex-col justify-between relative bg-[#172035]" key={repo.id}>
            <div className='p-4'>
              <div className='flex justify-between pb-2'>
              <h1 className="text-2xl font-bold">{repo.name}</h1>
              <span className='bg-slate-700 rounded-full text-sm flex justify-center items-center py-2 px-4'>{repo.visibility}</span>
              </div>
              <p>{repo.description}</p>
            </div>
            <div className="flex gap-3 bg-gray-800 p-4">
              <p>{repo.language}</p>
              <p>{repo.forks_count}</p>
              <p>{repo.stargazers_count}</p>
              <p>{repo.watchers_count}</p>
            </div>
          </article>
        )
      })
    }
    </section>
  )
}

export default Forked