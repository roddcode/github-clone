import { GitHubUser } from '../types'

const Following = ({ following }: { following: GitHubUser[] }) => {
  if (following.length === 0) {
    return (
      <div className='text-center pt-9 text-3xl text-gray-900 dark:text-slate-50'>
        <h3 className='text-2xl font-bold'>No Following</h3>
      </div>
    )
  }

  return (
    <section className='h-auto py-2 w-full lg:grid-cols-2 grid grid-cols-1 gap-4'>
      {following.map((user: GitHubUser) => (
        <article
          className='w-full max-h-28 flex items-center justify-between bg-slate-200 dark:bg-[#172035] p-4 gap-4 rounded-xl'
          key={user.id}
        >
          <div className='flex gap-4 items-center'>
            <img
              src={user.avatar_url}
              alt=''
              width={64}
              height={64}
              className='w-16 h-16 rounded-full'
            />
            <h5 className='font-semibold text-lg'>{user.login}</h5>
          </div>
          <a
            href={user.html_url}
            target='_blank'
            className='dark:text-slate-50 flex justify-center items-center bg-neutral-300 dark:bg-slate-500 p-[9px] rounded-full'
          >
            <span className='material-symbols-outlined flex justify-center items-center'>
              link
            </span>
          </a>
        </article>
      ))}
    </section>
  )
}

export default Following
