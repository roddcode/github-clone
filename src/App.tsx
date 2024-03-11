import { useContext, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import Repositories from './components/Repositories';
import Following from './components/Following';
import { UserContext } from './context/UserContext'; 
import Followers from './components/Followers';
import Forked from './components/Forked';

function App() {
  const { user, setUser, search, setSearch, repos, setRepos, followers, setFollowers, forks, setForks, following, setFollowing, tab, setTab } = useContext(UserContext);

  useEffect(() => {
    fetch(`https://api.github.com/users/${search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${search}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${search}/following`)
      .then((response) => response.json())
      .then((data) => {
        setFollowing(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${search}/followers`)
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data);
      });
  }, []);

  return (
    <>
      <Navbar setSearch={setSearch} />
      <main className='p-4 flex flex-col gap-8 md:flex-row'>
        <ProfileSidebar user={user} />
        <div className='w-full overflow-y-auto max-h-[540px] scrollbar-hide'>
          <div className='overflow-y-auto'>
            <nav className='w-full grid grid-flow-col gap-2 text-center'>
              <span
                className={`py-2 hover:border-b-cyan-500 border-transparent border-b-4 ${
                  tab === 'repos' && 'border-b-cyan-500'
                }`}
                onClick={() => {
                  setTab('repos');
                }}
              >
                Repositories
              </span>
              <span className={`py-2 hover:border-b-cyan-500 border-transparent border-b-4 ${
                  tab === 'forked' && 'border-b-cyan-500'
                }`}
                onClick={() => {
                  setTab('forked');
                }}>
                Forked
              </span>
              <span className={`py-2 hover:border-b-cyan-500 border-transparent border-b-4 ${
                  tab === 'followers' && 'border-b-cyan-500'
                }`}
                onClick={() => {
                  setTab('followers');
                }}>
                Followers
              </span>
              <span className={`py-2 hover:border-b-cyan-500 border-transparent border-b-4 ${
                  tab === 'following' && 'border-b-cyan-500'
                }`}
                onClick={() => {
                  setTab('following');
                }}>
                Following
              </span>
            </nav>
          </div>

          {tab === 'repos' && <Repositories repos={repos} />}
          {tab === 'forked' && <Forked repos={repos} />}
          {tab === 'followers' && <Followers followers={followers} />}
          {tab === 'following' && <Following following={following} />}
        </div>
      </main>
    </>
  );
}

export default App;
