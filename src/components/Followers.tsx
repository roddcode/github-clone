import { GitHubUser } from "../types"

const Followers = ({followers}: {followers: GitHubUser[]}) => {
  return (
    <section className='h-full py-2 w-full lg:grid-cols-2 grid grid-cols-1 gap-4'>
      {
        followers.map((user: GitHubUser) => {
          return (
            <article className="w-full max-h-28 flex items-center justify-between bg-[#172035] p-4 gap-4 rounded-xl" key={user.id}>
                <div className="flex gap-4 items-center">
                <img src={user.avatar_url} alt="" className="w-16 h-16 rounded-full" />
                <h5 className="font-semibold text-lg">{user.login}</h5>
                </div>
                <a href={user.html_url} target="_blank" className="text-slate-50">View Profile</a>

            </article>
          )
        })
      }
    </section>
  )
}

export default Followers