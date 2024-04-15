import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName:'elan-sk',
    name:'Elan SK',
    isFollowing: false,
  },
  {
    userName:'nathaclaus',
    name:'Natalia',
    isFollowing: true,
  },
  {
    userName:'supercodeoficial',
    name:'SuperMax',
    isFollowing: false,
  },
]

export default function App() {
  return (
    <div className='card-container d-flex flex-column gap-3 w-100'>
      {
        users.map(({userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </div>
  )
}
