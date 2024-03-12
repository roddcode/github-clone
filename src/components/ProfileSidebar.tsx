import { GitHubUser } from "../types"

const ProfileSidebar = ({ user }: { user: GitHubUser }) => {
  return (
    <div className='md:w-72 min-w-72 flex w-full flex-col gap-5 md:sticky md:top-0'>
      <div className='flex w-full md:justify-center items-center'>
        <img
          src={user.avatar_url}
          alt=''
          width="200" height="200"
          className='rounded-full w-[200px] h-[200px]'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <h4 id='name' className='text-2xl font-semibold'>
          {user.name}
        </h4>
        <h5 id='login' className='text-blue-800 dark:text-cyan-500'>
          {user.login}
        </h5>
        <p id='bio' className='pb-2 font-light'>
          {user.bio}
        </p>
        <a
          href={`https://github.com/${user.login}`}
          className='bg-blue-800 dark:bg-cyan-500 text-slate-50 px-4 py-2 rounded text-center flex justify-center items-center gap-2'
        >
          <span className="material-symbols-outlined">open_in_new</span>
          See on Github
        </a>
      </div>

      <div>
        <p className='flex gap-2 items-end'>
          <span className='material-symbols-outlined w-[21px]'>location_on</span>
          {user.location}
        </p>

        <p className='flex gap-2 items-end'>
          <span className="material-symbols-outlined w-[21px]">apartment</span>
          {user.blog}
        </p>
      </div>

      <div className=''>
        <p className='font-semibold text-lg'>
          {user.public_repos}{' '}
          <span className=' text-gray-500 font-normal text-base'>Repos</span>
        </p>
        <p className='font-semibold text-lg'>
          {user.followers}{' '}
          <span className=' text-gray-500 font-normal text-base'>Followers</span>
        </p>
        <p className='font-semibold text-lg'>
          {user.following}{' '}
          <span className=' text-gray-500 font-normal text-base'>Following</span>
        </p>
      </div>
    </div>
  )
}

export default ProfileSidebar
