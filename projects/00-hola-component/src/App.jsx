import './App.css'
import {TwitterFollowCard} from './components/TwitterFollowCard'

function App() {
  const format = (userName) => `@${userName}`

  const midudev = {isFollowing: false, name: 'midudev', userName: 'midudev', formatUserName: format}
  

  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={format} isFollowing={true} name='Cristian' userName='cristian' />
      <TwitterFollowCard formatUserName={format} isFollowing={false} name='Cristian' userName='cristian' />
      <TwitterFollowCard formatUserName={format} isFollowing={true} name='Cristian' userName='cristian' />
      <TwitterFollowCard {...midudev}/>


    </section>
  )
}

export default App
